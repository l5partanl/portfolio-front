import { Component } from "@angular/core";
import { ShowcaseCardComponent } from "../../components/showcase-card/showcase-card.component";

@Component({
	selector: "app-home",
	imports: [ShowcaseCardComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	showGraphicCard = false;

	toggleGraphicCard(): void {
		this.showGraphicCard = !this.showGraphicCard;
	}

	ngAfterViewInit(): void {
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
				}, 250); // delay para mostrar
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
