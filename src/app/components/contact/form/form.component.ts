import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [''],
      email: ['', Validators.required],
      message: [''],
      consent: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      for (const key in this.form.value) {
        if (this.form.value.hasOwnProperty(key)) {
          formData.append(key, this.form.value[key]);
        }
      }

      this.http.post('/', formData).subscribe({
        next: () => this.router.navigate(['/success']),
        error: (error) => console.error('Submission error', error)
      });
    }
  }
}
