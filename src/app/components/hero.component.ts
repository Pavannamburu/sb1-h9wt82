import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="container text-center">
        <h1 class="text-5xl font-bold mb-6 animate-fade">
          Full Stack Developer
        </h1>
        <p class="text-xl text-gray-600 mb-8 animate-fade">
          Building Robust Applications with Modern Technologies
        </p>
        <div class="flex gap-4 justify-center">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#contact" class="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}