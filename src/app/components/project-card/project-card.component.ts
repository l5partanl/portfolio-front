import { CommonModule } from "@angular/common";
import { Component, ElementRef, inject, Input } from "@angular/core";
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
	@Input() index!: number;

	private el = inject(ElementRef);

	ngAfterViewInit(): void {
		const frame = this.el.nativeElement.querySelector(".device-frame");
		if (!frame) return;

		const applyTransform = (x: number, y: number) => {
			const rect = frame.getBoundingClientRect();
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = -(y - rect.top - centerY) / 20;
			const rotateY = (x - rect.left - centerX) / 20;

			frame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
			frame.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.4)`;
		};

		const reset = () => {
			frame.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
			frame.style.boxShadow = "";
			frame.classList.add("released");

			setTimeout(() => {
				frame.classList.remove("released");
			}, 400);
		};

		// Desktop
		frame.addEventListener("mousemove", (e: MouseEvent) => {
			applyTransform(e.clientX, e.clientY);
		});
		frame.addEventListener("mouseleave", reset);

		// Mobile
		frame.addEventListener("touchmove", (e: TouchEvent) => {
			const touch = e.touches[0];
			applyTransform(touch.clientX, touch.clientY);
		});
		frame.addEventListener("touchend", reset);
	}

	getFrameType(i: number): "mobile" | "mobile1" | "mobile2" {
		const types = ["mobile", "mobile1", "mobile2"];
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		return types[i % types.length] as any;
	}

	getFrameUrl(i: number): string {
		const urls = {
			mobile:
				"https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-mobile-phone-frame-photo-png-image_14568670.png",

			mobile1:
				"https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-mobile-phone-frame-photo-png-image_14568670.png",

			mobile2:
				"https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-mobile-phone-frame-photo-png-image_14568670.png",
		};
		const type = this.getFrameType(i);
		return urls[type];
	}

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
