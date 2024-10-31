import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="card">
            <h3 class="text-xl font-bold mb-4">Frontend</h3>
            <ul class="space-y-2">
              <li *ngFor="let skill of frontendSkills">
                <div class="flex justify-between mb-1">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-primary rounded-full h-2" [style.width]="skill.level + '%'"></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="card">
            <h3 class="text-xl font-bold mb-4">Backend</h3>
            <ul class="space-y-2">
              <li *ngFor="let skill of backendSkills">
                <div class="flex justify-between mb-1">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-primary rounded-full h-2" [style.width]="skill.level + '%'"></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="card">
            <h3 class="text-xl font-bold mb-4">Tools & Others</h3>
            <ul class="space-y-2">
              <li *ngFor="let skill of otherSkills">
                <div class="flex justify-between mb-1">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-primary rounded-full h-2" [style.width]="skill.level + '%'"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 80 }
  ];

  backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'MongoDB', level: 75 }
  ];

  otherSkills = [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 }
  ];
}