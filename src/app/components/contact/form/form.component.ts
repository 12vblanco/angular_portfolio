import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
      consent: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = new URLSearchParams();
      Object.keys(this.contactForm.value).forEach(key => {
        formData.set(key, this.contactForm.value[key]);
      });

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      .then(response => {
        if (response.ok) {
          this.router.navigate(['/success']);
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        console.error('Submission error', error);
        alert(error);
      });
    }
  }
}
