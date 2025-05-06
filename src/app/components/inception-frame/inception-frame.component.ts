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
	@ViewChildren("parallaxLayers") parallaxLayers!: QueryList<
		ElementRef<HTMLImageElement>
	>;
	layerImage = "../../../assets/images/viewport-capture.png"; // imagen con transparencia
	private scrollHandler!: () => void;

	zone = inject(NgZone);

	ngAfterViewInit() {
		this.zone.runOutsideAngular(() => {
			this.scrollHandler = () => {
				const scrollY = window.scrollY;

				this.parallaxLayers.forEach((layer, index) => {
					const factor = 0.1 * (index + 1);
					const translateY = -scrollY * factor;
					const scale = 1.2 - 0.2 * (4 - index); // ejemplo: 0.6, 0.7, 0.8, 0.9, 1

					layer.nativeElement.style.transform = `translate3d(-50%, ${translateY}px, 0) scale(${scale})`;
				});
			};

			window.addEventListener("scroll", this.scrollHandler);
		});
	}

	ngOnDestroy() {
		window.removeEventListener("scroll", this.scrollHandler);
	}
}
