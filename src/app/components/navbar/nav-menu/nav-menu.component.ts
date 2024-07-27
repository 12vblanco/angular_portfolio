import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartComponent } from "../../product/cart/cart.component";

interface NavLink {
  path: string;
  name: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CartComponent],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @Input() links: NavLink[] = [];
  @Input() isDesktop: boolean = true;
  @Output() closeMenu = new EventEmitter<void>();

  handleClick() {
    this.closeMenu.emit();
  }
}