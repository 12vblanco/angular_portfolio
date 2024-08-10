import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private router: Router) {}

  onSubmitHandler(event: Event): void {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
  
    // Option 1: Directly let Netlify handle it, then navigate on success
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(formElement) as any).toString(),
    })
      .then((response) => {
        if (response.ok) {
          this.router.navigate(['/success']);
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert(error.message);
      });
  }
}