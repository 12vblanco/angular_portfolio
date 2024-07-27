import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CartContext } from 'app/utils/cart.context';
import { Subscription } from 'rxjs';
import { AddToCartComponent } from '../../../../assets/svg/add-to-cart-icon.component';
import { Product } from '../product/products';

@Component({
  selector: 'app-add-to-button',
  standalone: true,
  templateUrl: './add-to-button.component.html',
  styleUrls: ['./add-to-button.component.css'],
  imports:[CommonModule, AddToCartComponent],
})
export class AddToButtonComponent implements OnInit, OnDestroy {
  @Input() product!: Product;
  @Input() handleShow!: (product: Product) => void;
  productQty: number = 0;
  private subscription: Subscription | null = null;

  constructor(private cartContext: CartContext, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.subscription = this.cartContext.items$.subscribe(items => {
      const item = items.find(i => i.id === this.product.id);
      this.productQty = item ? item.quantity : 0;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addToCart() {
    this.cartContext.addOneToCart(this.product.id);
  }

  removeFromCart() {
    this.cartContext.removeOneFromCart(this.product.id);
  }
}
