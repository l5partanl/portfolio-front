import { Component, inject, type OnInit } from "@angular/core";
import { ProjectService } from "../../services/project.service";
import type { Project } from "../../interfaces/project.interface";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
	selector: "app-fullstack-projects",
	imports: [ProjectCardComponent],
	templateUrl: "./fullstack-projects.component.html",
	styleUrl: "./fullstack-projects.component.css",
})
export class FullstackProjectsComponent implements OnInit {
	projects: Project[] = [];
	projectService = inject(ProjectService);
	showMainContent = false;
	visibleProjects: Set<string> = new Set();

	async ngOnInit(): Promise<void> {
		setTimeout(() => {
			this.showMainContent = true;
		}, 1200);
		try {
			const data = await this.projectService.getProjectsByType("fullstack");
			this.projects = data;
		} catch (error) {
			console.error("Error loading fullstack projects:", error);
		}
	}
}
