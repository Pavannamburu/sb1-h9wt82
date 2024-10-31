import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header.component';
import { HeroComponent } from './app/components/hero.component';
import { AboutComponent } from './app/components/about.component';
import { SkillsComponent } from './app/components/skills.component';
import { ProjectsComponent } from './app/components/projects.component';
import { ExperienceComponent } from './app/components/experience.component';
import { ContactComponent } from './app/components/contact.component';
import { FooterComponent } from './app/components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-experience />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  constructor() {}
}

bootstrapApplication(App, {
  providers: [
    provideRouter([])
  ]
});