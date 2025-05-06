import { Component } from "@angular/core";
import { FrameComponent } from "./components/frame/frame.component";

@Component({
	selector: "app-root",
	imports: [FrameComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "portfolio_front";
}
