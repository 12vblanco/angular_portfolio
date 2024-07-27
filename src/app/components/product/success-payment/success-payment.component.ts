import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-payment',
  standalone: true,
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent implements OnInit, OnDestroy {
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
