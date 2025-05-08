import {
	Component,
	EventEmitter,
	Input,
	type OnInit,
	type OnDestroy,
	Output,
	inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectService } from "../../services/project.service";
import type { Project } from "../../interfaces/project.interface";

@Component({
	selector: "app-showcase-card",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./showcase-card.component.html",
	styleUrl: "./showcase-card.component.css",
})
export class ShowcaseCardComponent implements OnInit, OnDestroy {
	@Input() type: "graphic" | "art" = "graphic"; // valor por defecto
	@Output() close = new EventEmitter<void>();
	projectService = inject(ProjectService);
	projects: Project[] = [];
	selectedItem: Project | null = null;
	currentIndex = 0;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	private intervalId: any;

	async ngOnInit(): Promise<void> {
		try {
			const data = await this.projectService.getProjectsByType(this.type);
			this.projects = data;
			this.startCarousel();
		} catch (error) {
			console.error("Error loading showcase:", error);
		}
	}

	ngOnDestroy(): void {
		clearInterval(this.intervalId);
	}

	startCarousel(): void {
		this.intervalId = setInterval(() => {
			this.currentIndex = (this.currentIndex + 1) % this.projects.length;
		}, 4000);
	}

	handleClose(): void {
		this.close.emit();
	}

	nextSlide(): void {
		this.currentIndex = (this.currentIndex + 1) % this.projects.length;
	}

	prevSlide(): void {
		this.currentIndex =
			(this.currentIndex - 1 + this.projects.length) % this.projects.length;
	}

	openFullscreen(item: Project): void {
		this.selectedItem = item;
	}

	closeFullscreen(): void {
		this.selectedItem = null;
	}
}
