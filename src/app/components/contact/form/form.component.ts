import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class FormComponent implements OnInit {
  contactForm: FormGroup;
  
  constructor(private http: HttpClient, private router: Router) {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue])
    });
  }
  
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmitHandler(event: Event) {
    event.preventDefault();

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      formData['form-name'] = 'contactForm';
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      this.http
        .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
        .subscribe(
          () => {
            console.log('Form submission successful');
            this.router.navigate(['/success']);
          },
          (error) => {
            console.error('Form submission error:', error);
            alert(error);
          }
        );
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get agree() { return this.contactForm.get('agree'); }
}