import type { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FullstackProjectsComponent } from "./pages/fullstack-projects/fullstack-projects.component";

export const routes: Routes = [
	{ path: "", pathMatch: "full", component: HomeComponent },
	{ path: "projects/fullstack", component: FullstackProjectsComponent },
	{ path: "**", component: HomeComponent },
];
