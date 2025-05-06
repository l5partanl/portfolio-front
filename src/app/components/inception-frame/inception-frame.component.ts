import {
	Component,
	type ElementRef,
	type AfterViewInit,
	type OnDestroy,
	NgZone,
	inject,
	ViewChildren,
	type QueryList,
} from "@angular/core";

@Component({
	selector: "app-inception-frame",
	standalone: true,
	templateUrl: "./inception-frame.component.html",
	styleUrl: "./inception-frame.component.css",
})
export class InceptionFrameComponent implements AfterViewInit, OnDestroy {
	@ViewChildren("parallaxLayers") parallaxLayers!: QueryList<ElementRef>;
	private scrollHandler!: () => void;

	layerImage = "../../../assets/images/viewport-capture.png"; // imagen con transparencia

	zone = inject(NgZone);

	ngAfterViewInit(): void {
		this.zone.runOutsideAngular(() => {
			const scrollContainer = document.querySelector(".main-content");

			if (!scrollContainer) return;

			this.scrollHandler = () => {
				const scrollY = (scrollContainer as HTMLElement).scrollTop;

				this.parallaxLayers.forEach((layer, index) => {
					const factor = 0.1 * (index + 1);
					const translateY = -scrollY * factor;
					const scale = 1.2 - 0.2 * (4 - index);

					layer.nativeElement.style.transform = `translate3d(-50%, ${translateY}px, 0) scale(${scale})`;
				});
			};

			scrollContainer.addEventListener("scroll", this.scrollHandler);
		});
	}

	ngOnDestroy(): void {
		const scrollContainer = document.querySelector(".main-content");
		if (this.scrollHandler && scrollContainer) {
			scrollContainer.removeEventListener("scroll", this.scrollHandler);
		}
	}
}
