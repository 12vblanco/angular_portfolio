import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit, OnDestroy {
  private timer: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.timer = setTimeout(() => {
      this.router.navigate(['/']);
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleBackHome(): void {
    this.router.navigate(['/']);
  }
}
