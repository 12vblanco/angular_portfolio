import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalCloseIconComponent } from '../../../../assets/svg/close-icon.component';
import { CartContext } from '../../../utils/cart.context';
import { CartProductComponent } from '../cart-product/cart-product.component';
import { AddToCartComponent } from 'assets/svg/add-to-cart-icon.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, CartProductComponent,ModalCloseIconComponent, AddToCartComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() handleClose!: () => void;
  @Output() close = new EventEmitter<void>();

  cartItems: any[] = [];
  cartItemsCount = 0;
  totalCost = 0;
  stripeImg = 'assets/images/stripe_logo.png';

  private cartSubscription: Subscription | null = null;

  constructor(private router: Router, private cartContext: CartContext) {}

  ngOnInit() {
    this.cartSubscription = this.cartContext.items$.subscribe(items => {
      this.cartItems = items;
      this.cartItemsCount = items.length;
      this.updateTotalCost();
    });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  get headerStyle() {
    return {
      borderBottom: this.cartItemsCount > 0 ? '1px solid #333' : 'none'
    };
  }

  updateTotalCost() {
    this.cartContext.getTotalCost().subscribe(cost => {
      this.totalCost = cost;
    });
  }

  async checkout() {
    try {
      const response = await fetch('http://localhost:4000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: this.cartItems }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.assign(data.url);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
  }

  goToHome() {
    this.router.navigate(['/']);``
  }
  closeModal() {
    this.close.emit();
  }
}