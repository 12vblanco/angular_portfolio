import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { getProductData } from '../components/product/product/products';

interface CartItem {
  id: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartContext {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  private emitUpdate() {
    this.itemsSubject.next(this.itemsSubject.value);
  }

  addOneToCart(id: string) {
    console.log("Adding to cart:", id);
    const currentItems = this.itemsSubject.value;
    const existingProduct = currentItems.find(item => item.id === id);
    
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentItems.push({ id, quantity: 1 });
    }
    
    this.emitUpdate();
    console.log("Cart after adding:", this.itemsSubject.value);
  }

  removeOneFromCart(id: string) {
    console.log("Removing one from cart:", id);
    const currentItems = this.itemsSubject.value;
    const existingProduct = currentItems.find(item => item.id === id);
    
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        const updatedItems = currentItems.filter(item => item.id !== id);
        this.itemsSubject.next(updatedItems);
      }
    }
    
    this.emitUpdate();
    console.log("Cart after removing one:", this.itemsSubject.value);
  }

  deleteFromCart(id: string) {
    console.log("Deleting from cart:", id);
    const currentItems = this.itemsSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== id);
    this.itemsSubject.next(updatedItems);
    console.log("Cart after deleting:", this.itemsSubject.value);
  }

  getTotalCost() {
    return this.items$.pipe(
      map(items => items.reduce((total, item) => {
        const productData = getProductData(item.id);
        return total + (productData ? parseFloat(productData.price) * item.quantity : 0);
      }, 0))
    );
  }}