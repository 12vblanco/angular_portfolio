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
    const formData = new FormData(formElement);
    const formObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });
    console.log('Form Data:', formObject);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formObject).toString(),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form submission successful');
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