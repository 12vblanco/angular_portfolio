import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {
  
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
    .then(() => {
      console.log('Form submission successful');
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      alert(error.message);
    });
  }
}
