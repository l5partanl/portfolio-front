import {
	Component,
	type AfterViewInit,
	inject,
	ViewChild,
	type ElementRef,
} from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";

@Component({
	selector: "app-frame",
	standalone: true,
	imports: [RouterOutlet, FooterComponent],
	templateUrl: "./frame.component.html",
	styleUrl: "./frame.component.css",
})
export class FrameComponent implements AfterViewInit {
	menuOpen = false;
	router = inject(Router);

	@ViewChild("homeBtn", { static: true })
	homeBtn!: ElementRef<HTMLAnchorElement>;

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
		const frame = document.querySelector(".app-frame");
		frame?.classList.toggle("blur-content", this.menuOpen);
	}

	navigateTo(url: string) {
		this.router.navigateByUrl(url);
		this.menuOpen = false;
		const frame = document.querySelector(".app-frame");
		frame?.classList.remove("blur-content");
	}

	ngAfterViewInit(): void {
		this.router.events.subscribe(() => {
			const isHome = this.router.url === "/";
			this.homeBtn.nativeElement.classList.toggle("d-none", isHome);
		});
	}
}
