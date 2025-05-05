import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { InceptionFrameComponent } from "../inception-frame/inception-frame.component";

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
	imports: [CommonModule, InceptionFrameComponent],
	templateUrl: "./project-card.component.html",
	styleUrl: "./project-card.component.css",
})
export class ProjectCardComponent {
	@Input() project!: Project;

	getIconPath(tag: string): string {
		const iconMap: { [key: string]: string } = {
			angular: "https://www.svgrepo.com/download/452156/angular.svg",
			react: "https://www.svgrepo.com/download/452092/react.svg",
			"node.js": "https://www.svgrepo.com/download/378837/node.svg",
			node: "https://www.svgrepo.com/download/452075/nodejs.svg",
			mongodb: "https://www.svgrepo.com/download/331488/mongodb.svg",
			firebase: "https://www.svgrepo.com/download/373595/firebase.svg",
			express: "https://www.svgrepo.com/download/474391/node.svg",
			typescript: "https://www.svgrepo.com/download/349540/typescript.svg",
			javascript: "https://www.svgrepo.com/download/349419/javascript.svg",
			solidworks: "https://www.svgrepo.com/show/508968/solidworks.svg",
			blender: "https://www.svgrepo.com/show/353488/blender.svg",
			autocad: "https://www.svgrepo.com/show/452163/autodesk.svg",
			"adobe illustrator":
				"https://www.svgrepo.com/show/452147/adobe-illustrator.svg",
			illustrator: "https://www.svgrepo.com/show/452147/adobe-illustrator.svg",
			"adobe photoshop":
				"https://www.svgrepo.com/show/452149/adobe-photoshop.svg",
			photoshop: "https://www.svgrepo.com/show/452149/adobe-photoshop.svg",
			sketching: "https://www.svgrepo.com/show/263211/pencil.svg",
			"qa/qc": "https://www.svgrepo.com/show/530156/question-and-answer.svg",
			"project management": "https://www.svgrepo.com/show/375483/project.svg",
			rendering: "https://www.svgrepo.com/show/184284/picture.svg",
		};

		const normalized = tag.toLowerCase();
		return iconMap[normalized] || "https://www.svgrepo.com/show/452004/tag.svg"; // genérico
	}
}
