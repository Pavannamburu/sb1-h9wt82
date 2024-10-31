import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-primary">JD</a>
        <ul class="flex gap-6">
          <li><a href="#about" class="hover:text-primary">About</a></li>
          <li><a href="#skills" class="hover:text-primary">Skills</a></li>
          <li><a href="#projects" class="hover:text-primary">Projects</a></li>
          <li><a href="#experience" class="hover:text-primary">Experience</a></li>
          <li><a href="#contact" class="hover:text-primary">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    a { text-decoration: none; color: inherit; }
    li { list-style: none; }
  `]
})
export class HeaderComponent {}