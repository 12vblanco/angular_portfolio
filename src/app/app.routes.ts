import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TermsComponent } from './pages/terms/terms.component';
// import { SuccessComponent } from './components/contact/suc-pagecess/success.component'; 
import { ErrorPaymentComponent } from './components/product/error-payment/error-payment.component';
import { SuccessPaymentComponent } from './components/product/success-payment/success-payment.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'terms', component: TermsComponent },
  // { path: 'success', component: SuccessComponent },
  { path: 'success-payment', component: SuccessPaymentComponent },
  { path: 'error-payment', component: ErrorPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
