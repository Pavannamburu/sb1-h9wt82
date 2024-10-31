import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <p class="text-lg">
              Hi, I'm John Doe, a passionate Full Stack Developer with 5+ years of experience in building web applications.
            </p>
            <p>
              I specialize in creating scalable and efficient solutions using modern technologies. My journey in software development
              started during my Computer Science degree, and I've been in love with coding ever since.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new technologies.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="card">
              <h3 class="font-bold mb-2">Education</h3>
              <p>B.S. Computer Science</p>
              <p class="text-sm text-gray-600">University of Technology</p>
            </div>
            <div class="card">
              <h3 class="font-bold mb-2">Experience</h3>
              <p>5+ Years</p>
              <p class="text-sm text-gray-600">Full Stack Development</p>
            </div>
            <div class="card">
              <h3 class="font-bold mb-2">Projects</h3>
              <p>50+ Completed</p>
              <p class="text-sm text-gray-600">Web Applications</p>
            </div>
            <div class="card">
              <h3 class="font-bold mb-2">Clients</h3>
              <p>30+ Happy</p>
              <p class="text-sm text-gray-600">Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}