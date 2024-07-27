import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InfoIconComponent } from '../../../../assets/svg/info-icon.component';
import { AddToButtonComponent } from '../add-to-button/add-to-button.component.js';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,InfoIconComponent,AddToButtonComponent],
  // imports: [CommonModule, InfoIconComponent, AddToButtonComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() handleShow!: (product: any) => void;
  @Input() product!: any;

  showInfo = false;

  ngOnInit() {
    console.log('AddToButton mounted. Product:', this.product);
  }

  clickHandler() {
    this.showInfo = !this.showInfo;
    setTimeout(() => {
      this.showInfo = false;
    }, 3000);
  }

  isDarkBg(productName: string): boolean {
    return productName === 'Fraxinus excelsior A4';
  }
}