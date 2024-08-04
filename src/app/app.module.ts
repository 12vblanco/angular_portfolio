import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { FormComponent } from './components/contact/form/form.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { BurgerMenuComponent } from './components/navbar/burger-menu/burger-menu.component';
import { NavMenuComponent } from './components/navbar/nav-menu/nav-menu.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { CartComponent } from './components/product/cart/cart.component';
import { ErrorPaymentComponent } from './components/product/error-payment/error-payment.component';
import { ModalComponent } from './components/product/modal/modal.component';
import { SuccessPaymentComponent } from './components/product/success-payment/success-payment.component';
import { CartContext } from './utils/cart.context';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([]), 
    NavbarComponent,
    FooterComponent,
    NavMenuComponent,
    BurgerMenuComponent,
    ModalComponent,
    SuccessPaymentComponent,
    ErrorPaymentComponent,
    CartComponent,
    FormComponent,
  ],
  providers: [CartContext],
  bootstrap: [AppComponent]
})
export class AppModule { }
