import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../app/components/navbar/navbar/navbar.component';
import { FooterComponent } from '../app/components/footer/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
