import type { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FullstackProjectsComponent } from "./pages/fullstack-projects/fullstack-projects.component";
import { DesignProjectsComponent } from "./pages/design-projects/design-projects.component";
import { AboutComponent } from "./pages/about/about.component";

export const routes: Routes = [
	{ path: "", pathMatch: "full", component: HomeComponent },
	{ path: "projects/fullstack", component: FullstackProjectsComponent },
	{ path: "projects/design", component: DesignProjectsComponent },
	{ path: "about", component: AboutComponent },
	{ path: "**", component: HomeComponent },
];
