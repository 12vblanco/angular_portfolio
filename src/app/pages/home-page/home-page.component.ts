import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { MainContainerComponent } from '../main-container/main-container.component';
// import { StyledContainerComponent } from '../styled-container/styled-container.component';
import { ProductComponent } from '../../components/product/product/product.component';
import { products } from '../../components/product/product/products';

interface Product {
  id: string;
    name: string;
    format: string;
    price: string;
    description: string;
    description2?: string;
    img: string;
    link?: string;
    previous?: string;
    next?: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = products;
    window.scrollTo(0, 0);
  }

  handleShow(product: Product): void {
    // Implement your handleShow logic here
    console.log('Show product:', product);
  }
}