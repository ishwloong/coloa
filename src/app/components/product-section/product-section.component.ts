import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cl-product-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss',
})
export class ProductSectionComponent implements OnInit {
  products: {
    id: number;
    img: string;
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
  }[] = [];

  constructor(private _product: ProductService) {}

  ngOnInit(): void {
    this.products = this._product.getProducts();
  }
}
