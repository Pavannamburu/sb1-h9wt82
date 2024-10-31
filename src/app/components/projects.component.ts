import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="section bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="card" *ngFor="let project of projects">
            <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover rounded mb-4">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                *ngFor="let tech of project.technologies"
                class="px-2 py-1 bg-gray-100 rounded text-sm">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-4">
              <a [href]="project.demo" target="_blank" class="btn btn-primary">Live Demo</a>
              <a [href]="project.github" target="_blank" class="btn btn-outline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management.',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
      demo: 'https://demo1.example.com',
      github: 'https://github.com/username/project1'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'assets/project2.jpg',
      technologies: ['React', 'Express', 'PostgreSQL', 'WebSocket'],
      demo: 'https://demo2.example.com',
      github: 'https://github.com/username/project2'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management and monitoring.',
      image: 'assets/project3.jpg',
      technologies: ['Vue.js', 'Python', 'Django', 'Redis'],
      demo: 'https://demo3.example.com',
      github: 'https://github.com/username/project3'
    },
    {
      title: 'AI Content Generator',
      description: 'Content generation tool powered by machine learning algorithms.',
      image: 'assets/project4.jpg',
      technologies: ['TensorFlow.js', 'Flask', 'AWS', 'Docker'],
      demo: 'https://demo4.example.com',
      github: 'https://github.com/username/project4'
    }
  ];
}