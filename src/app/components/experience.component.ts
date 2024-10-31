import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="section bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div class="space-y-8">
          <div class="card" *ngFor="let exp of experience">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold">{{ exp.role }}</h3>
                <p class="text-gray-600">{{ exp.company }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ exp.period }}</span>
            </div>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li *ngFor="let achievement of exp.achievements">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      achievements: [
        'Led a team of 5 developers in building a cloud-based SaaS platform',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      period: '2018 - 2020',
      achievements: [
        'Developed and maintained multiple client projects using MEAN stack',
        'Reduced server costs by 30% through architecture optimization',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'WebCraft Agency',
      period: '2016 - 2018',
      achievements: [
        'Built responsive web applications for various clients',
        'Implemented modern frontend practices improving user experience',
        'Collaborated with designers to create pixel-perfect interfaces'
      ]
    }
  ];
}