import { Component } from '@angular/core';
import { FormComponent } from '../../components/contact/form/form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  imports: [FormComponent]
})
export class ContactPageComponent {}
