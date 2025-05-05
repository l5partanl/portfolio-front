import { Component } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveLink?: string;
  github?: string;
}

@Component({
  selector: 'app-design-projects',
  imports: [ProjectCardComponent],
  templateUrl: './design-projects.component.html',
  styleUrl: './design-projects.component.css'
})
export class DesignProjectsComponent {
  projects: Project[] = [
    {
      title: '3D Product Visualization',
      description: 'Photorealistic rendering of an industrial product line using SolidWorks and Blender.',
      tags: ['SolidWorks', 'Blender', 'Rendering'],
      imageUrl: 'https://via.placeholder.com/400x200.png?text=Product+Render',
    },
    {
      title: 'Clean Room Architecture',
      description: 'Technical layout and visual development for laboratory clean rooms.',
      tags: ['AutoCAD', 'QA/QC', 'Project Management'],
      imageUrl: 'https://via.placeholder.com/400x200.png?text=Clean+Room',
    },
    {
      title: 'Lighting Design Thesis',
      description: 'Product and spatial lighting design, including concept sketches and CAD development.',
      tags: ['Sketching', 'SolidWorks', 'Adobe Illustrator'],
      imageUrl: 'https://via.placeholder.com/400x200.png?text=Lighting+Design',
    }
  ];
}
