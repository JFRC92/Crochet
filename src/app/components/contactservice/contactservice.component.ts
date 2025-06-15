import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactservice',
  standalone: true,
  imports: [ReactiveFormsModule, LogoComponent, RouterModule],
  templateUrl: './contactservice.component.html', // usa el HTML limpio que tienes
  styleUrls: ['./contactservice.component.css'], // usa el CSS limpio que tienes
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ContactserviceComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  getFieldError(field: string): string {
    const control = this.contactForm.get(field);
    if (!control || !control.errors) return '';

    if (control.errors['required']) {
      return 'Este campo es obligatorio';
    }
    if (control.errors['minlength']) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `Mínimo ${requiredLength} caracteres`;
    }
    if (control.errors['email']) {
      return 'Email inválido';
    }
    return 'Error en el campo';
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;

    // Simula envío
    setTimeout(() => {
      this.isSubmitting = false;
      if (Math.random() > 0.3) {
        this.showSuccessMessage = true;
        this.contactForm.reset();
      } else {
        this.showErrorMessage = true;
      }
    }, 2000);
  }
}
