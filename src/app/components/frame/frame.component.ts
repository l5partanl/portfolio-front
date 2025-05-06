import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-frame",
	imports: [RouterOutlet],
	templateUrl: "./frame.component.html",
	styleUrl: "./frame.component.css",
})
export class FrameComponent {
	menuOpen = false;

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
		const frame = document.querySelector(".app-frame");
		frame?.classList.toggle("blur-content", this.menuOpen);
	}
}
