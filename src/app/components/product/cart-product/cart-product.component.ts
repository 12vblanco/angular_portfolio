import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContext } from '../../../utils/cart.context';
import { getProductData, Product } from '../product/products';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() id!: string;
  @Input() quantity!: number;

  productData: Product | undefined;

  constructor(private cartContext: CartContext) {}

  ngOnInit() {
    this.productData = getProductData(this.id);
  }

  removeFromCart() {
    this.cartContext.deleteFromCart(this.id);
  }

  get totalPrice(): string {
    if (this.productData) {
      return (this.quantity * parseFloat(this.productData.price)).toFixed(2);
    }
    return '0.00';
  }
}