import { Component } from "@angular/core";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

interface Project {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string;
	liveLink?: string;
	github?: string;
}

@Component({
	selector: "app-fullstack-projects",
	imports: [ProjectCardComponent],
	templateUrl: "./fullstack-projects.component.html",
	styleUrl: "./fullstack-projects.component.css",
})
export class FullstackProjectsComponent {
	projects: Project[] = [
		{
			title: "Full-stack project 1",
			description:
				"A short description of full-stack project 1 with some extra details to explain the scope.",
			tags: ["Angular", "Node.js", "MongoDB"],
			imageUrl: "https://via.placeholder.com/400x200.png?text=Project+1",
			liveLink: "https://example.com/project1",
			github: "https://github.com/yourusername/project1",
		},
		{
			title: "Full-stack project 2",
			description:
				"Another full-stack project with cool frontend and backend integration.",
			tags: ["React", "Express", "Firebase"],
			imageUrl: "https://via.placeholder.com/400x200.png?text=Project+2",
			liveLink: "https://example.com/project2",
			github: "https://github.com/yourusername/project2",
		},
	];
}
