import {
	Component,
	EventEmitter,
	Input,
	type OnInit,
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
export class ShowcaseCardComponent implements OnInit {
	@Input() type: "graphic" | "art" = "graphic"; // valor por defecto
	@Output() close = new EventEmitter<void>();
	projectService = inject(ProjectService);
	projects: Project[] = [];

	async ngOnInit(): Promise<void> {
		try {
			const data = await this.projectService.getProjectsByType(this.type);
			this.projects = data;
		} catch (error) {
			console.error("Error loading showcase:", error);
		}
	}

	handleClose(): void {
		this.close.emit();
	}
}
