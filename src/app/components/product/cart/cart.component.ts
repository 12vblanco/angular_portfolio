import { Component, Input, OnInit } from '@angular/core';
import { AddToCartComponent } from '../../../../assets/svg/add-to-cart-icon.component';
import { CartContext } from '../../../utils/cart.context';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports:[AddToCartComponent]
})
export class CartComponent implements OnInit {
  @Input() handleShow!: () => void;

  productsCount = 0;

  constructor(private cartContext: CartContext) {}

  ngOnInit() {
    this.cartContext.items$.subscribe(items => {
      this.productsCount = items.reduce((sum, product) => sum + product.quantity, 0);
    });
  }
}
