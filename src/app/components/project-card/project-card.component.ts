import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

export interface Project {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string;
	liveLink?: string;
	github?: string;
}

@Component({
	selector: "app-project-card",
	imports: [CommonModule],
	templateUrl: "./project-card.component.html",
	styleUrl: "./project-card.component.css",
})
export class ProjectCardComponent {
	@Input() project!: Project;

	getIconClass(tag: string): string {
		switch (tag.toLowerCase()) {
		  case 'angular':
			return 'fab fa-angular text-danger';
		  case 'react':
			return 'fab fa-react text-info';
		  case 'node.js':
		  case 'node':
			return 'fab fa-node-js text-success';
		  case 'mongodb':
			return 'fas fa-database text-success';
		  case 'firebase':
			return 'fas fa-fire text-warning';
		  case 'express':
			return 'fas fa-server text-secondary';
		  case 'typescript':
			return 'fas fa-code text-primary';
		  case 'javascript':
			return 'fab fa-js text-warning';
		  case 'html':
			return 'fab fa-html5 text-danger';
		  case 'css':
			return 'fab fa-css3-alt text-primary';
		  default:
			return 'fas fa-code';
		}
	  }
	  
}
