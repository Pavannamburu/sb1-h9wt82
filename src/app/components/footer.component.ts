import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-900 text-white py-8">
      <div class="container">
        <div class="text-center">
          <p>&copy; {{ currentYear }} John Doe. All rights reserved.</p>
          <p class="text-sm text-gray-400 mt-2">Built with Angular</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}