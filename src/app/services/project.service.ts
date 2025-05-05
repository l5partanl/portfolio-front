import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import type { Project } from "../interfaces/project.interface";

@Injectable({
	providedIn: "root",
})
export class ProjectService {
	private httpClient = inject(HttpClient);
	private baseUrl = "http://localhost:3000/api/projects";

	project: Project | null = null;

	getFullstackProjects(): Promise<Project[]> {
		return lastValueFrom(
			this.httpClient.get<Project[]>(`${this.baseUrl}/fullstack`),
		);
	}

	getDesignProjects(): Promise<Project[]> {
		return lastValueFrom(
			this.httpClient.get<Project[]>(`${this.baseUrl}/design`),
		);
	}
}
