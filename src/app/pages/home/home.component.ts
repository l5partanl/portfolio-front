import {
	Component,
	type ElementRef,
	ViewChild,
	type AfterViewInit,
} from "@angular/core";
import { ShowcaseCardComponent } from "../../components/showcase-card/showcase-card.component";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [ShowcaseCardComponent, RouterOutlet],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent implements AfterViewInit {
	@ViewChild("elementRef") elementRef!: ElementRef;

	showGraphicCard = false;
	showArtCard = false;
	isIntroVisible = false;
	showScrollHint = true;

	ngOnInit(): void {
		const alreadyVisited = sessionStorage.getItem("homeIntroShown");

		if (!alreadyVisited) {
			this.isIntroVisible = true;

			setTimeout(() => {
				this.isIntroVisible = false;
				sessionStorage.setItem("homeIntroShown", "true");
			}, 5500);
		}
	}

	ngAfterViewInit(): void {
		const scrollContainer = document.querySelector(".main-content");

		setTimeout(() => {
			const hint = document.querySelector(".scroll-hint") as HTMLElement;
			if (hint && this.showScrollHint) {
				hint.classList.add("visible");
			}
		}, 8000);

		// Evita el conflicto con mobile: solo activa scroll handler en desktop
		if (scrollContainer && !this.isMobile()) {
			scrollContainer.addEventListener("scroll", this.handleScrollOnce, {
				passive: true,
				once: true,
			});
		}

		// Tooltips solo en desktop
		if (!this.isMobile()) {
			this.setupTooltips();
		}

		// Solo en mobile: efecto bounce al click
		if (this.isMobile()) {
			const wrappers = document.querySelectorAll(".preview-wrapper");

			for (const wrapper of wrappers) {
				wrapper.addEventListener("click", (event) => {
					const link = wrapper.querySelector("a");

					// Si hay un enlace, prevenimos la navegación
					if (link?.getAttribute("href")) {
						event.preventDefault();

						wrapper.classList.add("clicked");

						setTimeout(() => {
							wrapper.classList.remove("clicked");
							// Ir al link manualmente
							window.location.href = link.getAttribute("href") || "";
						}, 500); // suficiente para ver el bounce
					} else {
						// Si no hay enlace, solo el efecto visual
						wrapper.classList.add("clicked");
						setTimeout(() => {
							wrapper.classList.remove("clicked");
						}, 500);
					}
				});
			}
		}
	}

	toggleGraphicCard(): void {
		this.showGraphicCard = !this.showGraphicCard;
	}

	toggleArtCard(): void {
		this.showArtCard = !this.showArtCard;
	}

	handleScrollOnce = () => {
		const scrollHintEl = document.querySelector(".scroll-hint") as HTMLElement;

		if (scrollHintEl) {
			scrollHintEl.classList.add("fade-out");
			setTimeout(() => {
				this.showScrollHint = false;
			}, 2000); // debe coincidir con la transición CSS
		}

		const scrollContainer = document.querySelector(".main-content");
		scrollContainer?.removeEventListener("scroll", this.handleScrollOnce);
	};

	// NUEVA función para detectar móviles
	isMobile(): boolean {
		return window.innerWidth <= 768;
	}

	setupTooltips(): void {
		const wrappers = document.querySelectorAll(".preview-wrapper");

		for (const wrapper of wrappers) {
			const tooltip = wrapper.querySelector(".preview-box") as HTMLElement;
			const trigger = wrapper.querySelector("img");

			if (!tooltip || !trigger) continue;

			let timeoutId: number;
			let typeInterval: number;
			let hasTyped = false;

			wrapper.addEventListener("mouseenter", () => {
				timeoutId = window.setTimeout(() => {
					tooltip.classList.add("visible");
					if (!hasTyped) {
						tooltip.classList.add("typing");
						const fullText = tooltip.getAttribute("data-text") || "";
						let i = 0;
						tooltip.textContent = "";

						typeInterval = window.setInterval(() => {
							if (i <= fullText.length) {
								tooltip.textContent = fullText.slice(0, i);
								i++;
							} else {
								clearInterval(typeInterval);
								tooltip.classList.remove("typing");
							}
						}, 30);

						hasTyped = true;
					}
				}, 250);
			});

			wrapper.addEventListener("mousemove", (e) => {
				const bounds = wrapper.getBoundingClientRect();
				const x = (e as MouseEvent).clientX - bounds.left;
				const y = (e as MouseEvent).clientY - bounds.top;
				tooltip.style.left = `${x}px`;
				tooltip.style.top = `${y - 20}px`;
			});

			wrapper.addEventListener("mouseleave", () => {
				clearTimeout(timeoutId);
				clearInterval(typeInterval);
				tooltip.classList.remove("visible", "typing");
				tooltip.textContent = "";
				hasTyped = false;
				tooltip.style.left = "50%";
				tooltip.style.top = "-9999px";
			});
		}
	}
}
