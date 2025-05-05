import { Component, inject, type OnInit } from "@angular/core";
import { ProjectService } from "../../services/project.service";
import type { Project } from "../../interfaces/project.interface";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
	selector: "app-design-projects",
	imports: [ProjectCardComponent],
	templateUrl: "./design-projects.component.html",
	styleUrl: "./design-projects.component.css",
})
export class DesignProjectsComponent implements OnInit {
	projects: Project[] = [];
	projectService = inject(ProjectService);

	async ngOnInit(): Promise<void> {
		try {
			const data = await this.projectService.getDesignProjects();
			this.projects = data;
		} catch (error) {
			console.error("Error loading design projects:", error);
		}
	}
}
