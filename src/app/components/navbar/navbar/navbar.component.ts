import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartContext } from '../../../utils/cart.context';
import { ModalComponent } from '../../product/modal/modal.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

interface NavLink {
  path: string;
  name: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NavMenuComponent, BurgerMenuComponent, ModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  isDesktop: boolean = true;
  show: boolean = false;
  productsCount: number = 0;
  
  links: NavLink[] = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/blog', name: 'Blog' }
  ];

  private cartSubscription: Subscription | null = null;

  constructor(private router: Router, private cartContext: CartContext) { }

  ngOnInit(): void {
    this.handleResize();
    this.updateProductsCount();
    this.cartSubscription = this.cartContext.items$.subscribe(() => {
      this.updateProductsCount();
      if (this.productsCount > 0 && !this.show) {
        this.handleShowModal();
      } else if (this.productsCount === 0 && this.show) {
        this.handleCloseModal();
      }
    });
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleResize();
  }

  handleResize() {
    this.isDesktop = window.innerWidth > 1140;
  }

  updateProductsCount() {
    this.cartContext.items$.subscribe(items => {
      this.productsCount = items.reduce((sum, item) => sum + item.quantity, 0);
    });
  }

  handleShowModal() {
    this.show = true;
  }

  handleCloseModal() {
    this.show = false;
  }

  handleToggle() {
    this.isOpen = !this.isOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}