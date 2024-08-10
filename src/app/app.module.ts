import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app.routes';
import { AppComponent } from './app.component';
import { FormComponent } from './components/contact/form/form.component';
import { SuccessComponent } from './components/contact/success/success.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
