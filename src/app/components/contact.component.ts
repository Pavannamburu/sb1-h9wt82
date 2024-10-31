import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="section bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Contact Information</h3>
            <div class="space-y-4">
              <p>
                <strong>Email:</strong>
                <a href="mailto:john@example.com" class="text-primary">johnexample.com</a>
              </p>
              <p>
                <strong>Location:</strong>
                San Francisco, CA
              </p>
              <div class="flex gap-4">
                <a href="https://github.com/username" target="_blank" class="text-gray-600 hover:text-primary">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/username" target="_blank" class="text-gray-600 hover:text-primary">
                  LinkedIn
                </a>
                <a href="https://twitter.com/username" target="_blank" class="text-gray-600 hover:text-primary">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <div>
                <label for="name" class="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  class="w-full p-2 border rounded"
                  [class.border-red-500]="isFieldInvalid('name')"
                >
              </div>
              <div>
                <label for="email" class="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  class="w-full p-2 border rounded"
                  [class.border-red-500]="isFieldInvalid('email')"
                >
              </div>
              <div>
                <label for="message" class="block mb-1">Message</label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="4"
                  class="w-full p-2 border rounded"
                  [class.border-red-500]="isFieldInvalid('message')"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string): boolean {
    const formField = this.contactForm.get(field);
    return formField ? formField.invalid && formField.touched : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Implement form submission logic here
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
