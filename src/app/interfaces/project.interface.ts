export interface Project {
	title: string;
	description: string;
	tags?: string[];
	imageUrl: string;
	liveLink?: string;
	github?: string;
	type: "fullstack" | "design" | "about" | "art";
}
