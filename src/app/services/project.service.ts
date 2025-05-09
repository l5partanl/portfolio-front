import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import type { Project } from "../interfaces/project.interface";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class ProjectService {
	private httpClient = inject(HttpClient);
	private baseUrl = environment.apiUrl;

	project: Project | null = null;

	getProjectsByType(type: string): Promise<Project[]> {
		return lastValueFrom(
			this.httpClient.get<Project[]>(`${this.baseUrl}/${type}`),
		);
	}
}
