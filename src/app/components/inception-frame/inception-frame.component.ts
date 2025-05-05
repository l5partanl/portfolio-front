import {
	Component,
	type ElementRef,
	ViewChild,
	type AfterViewInit,
	type OnDestroy,
} from "@angular/core";
import html2canvas from "html2canvas";

@Component({
	selector: "app-inception-frame",
	standalone: true,
	templateUrl: "./inception-frame.component.html",
	styleUrl: "./inception-frame.component.css",
})
export class InceptionFrameComponent implements AfterViewInit, OnDestroy {
	@ViewChild("frameCanvas", { static: true })
	frameCanvas!: ElementRef<HTMLImageElement>;
	@ViewChild("observerTarget", { static: true })
	observerTarget!: ElementRef<HTMLDivElement>;

	private intervalId: ReturnType<typeof setInterval> | null = null;
	private observer!: IntersectionObserver;

	ngAfterViewInit(): void {
		this.observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					this.captureFrame();
					this.intervalId = setInterval(() => this.captureFrame(), 300);
				} else {
					if (this.intervalId) {
						clearInterval(this.intervalId);
						this.intervalId = null;
					}
				}
			},
			{ threshold: 0.5 }, // actívate cuando el 20% del componente esté visible
		);

		this.observer.observe(this.observerTarget.nativeElement);
	}

	async captureFrame() {
		await this.preloadImages();
		const canvas = await html2canvas(document.body, {
			backgroundColor: null,
			logging: false,
			useCORS: true,
			scale: 0.4,
			removeContainer: true,
			ignoreElements: (el) =>
				el.id === "inception-wrapper" || el.tagName === "APP-INCEPTION-FRAME",
		});

		const dataUrl = canvas.toDataURL("image/jpeg", 0.5);
		this.frameCanvas.nativeElement.src = dataUrl;
	}
	private preloadImages(): Promise<void> {
		const images = Array.from(document.images) as HTMLImageElement[];
		const loading = images.map((img) => {
			if (img.complete) return Promise.resolve();
			return new Promise<void>((resolve) => {
				img.onload = img.onerror = () => resolve();
			});
		});
		return Promise.all(loading).then(() => {});
	}

	ngOnDestroy(): void {
		if (this.observer) this.observer.disconnect();
		if (this.intervalId) clearInterval(this.intervalId);
	}
}
