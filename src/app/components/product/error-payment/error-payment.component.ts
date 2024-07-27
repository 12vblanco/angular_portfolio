import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-payment',
  standalone: true,
  templateUrl: './error-payment.component.html',
  styleUrls: ['./error-payment.component.css']
})
export class ErrorPaymentComponent implements OnInit, OnDestroy {
  private timer: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.timer = setTimeout(() => {
      this.router.navigate(['/']);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleBackHome() {
    this.router.navigate(['/']);
  }
}
