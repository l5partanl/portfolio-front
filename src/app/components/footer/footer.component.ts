import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-footer",
	imports: [RouterModule],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.css",
})
export class FooterComponent {
	contentReady = false;

	onContentActivate(): void {
		// Esperamos un pequeño delay para suavidad
		setTimeout(() => {
			this.contentReady = true;
		}, 200); // Podés ajustar este tiempo
	}
}
