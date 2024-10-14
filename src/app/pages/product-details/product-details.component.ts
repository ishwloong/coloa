import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'cl-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule, SvgIconComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  productId = 0;
  product:
    | {
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        category: string;
        inStock: boolean;
        unit: string;
      }
    | undefined = {
    id: 0,
    img: '',
    name: '',
    description: '',
    price: 0,
    category: '',
    inStock: false,
    unit: '',
  };
  quantity = 1;
  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService
  ) {
    this.productId = +(_route.snapshot.paramMap.get('id') || 0);
  }

  ngOnInit(): void {
    if (!!this.productId) {
      this.product = this._product.getProductById(this.productId);
    }
  }

  reduce() {
    if (!this.quantity) return;
    this.quantity = this.quantity - 1;
  }

  increase() {
    this.quantity = this.quantity + 1;
  }

  onChangeQuantity(value: number) {
    this.quantity = value;
  }
}
