import { Component, Input, type OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectService } from "../../services/project.service";
import type { Project } from "../../interfaces/project.interface";

@Component({
	selector: "app-about",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./about.component.html",
	styleUrl: "./about.component.css",
})
export class AboutComponent implements OnInit {
	projectService = inject(ProjectService);
	showMainContent = false;

	about: Project = {
		_id: "",
		title: "",
		description: "",
		tags: [],
		imageUrl: "",
		type: "about",
	};

	async ngOnInit(): Promise<void> {
		setTimeout(() => {
			this.showMainContent = true;
		}, 1200);
		try {
			const projects = await this.projectService.getProjectsByType("about");
			this.about = projects[0]; // Solo usamos el primer elemento
		} catch (error) {
			console.error("Error loading about data:", error);
		}
	}
}
