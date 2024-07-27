import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { BurgerIconComponent } from 'assets/svg/burger-icon.component';
import { ModalCloseIconComponent } from 'assets/svg/close-icon.component';
import { CartContext } from '../../../utils/cart.context';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, BurgerIconComponent, ModalCloseIconComponent, ],
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  @Output() showMenu = new EventEmitter<void>();
  isOpen: boolean = false;

  productsCount = 0;

  constructor(private cartContext: CartContext) {}

  ngOnInit() {
    this.cartContext.items$.subscribe(items => {
      this.productsCount = items.reduce((sum, product) => sum + product.quantity, 0);
    });
  }

  clickHandler() {
    this.isOpen = !this.isOpen;
    this.showMenu.emit();
  }
}