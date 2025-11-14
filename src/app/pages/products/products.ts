import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { ProductsService } from '../../services/products/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  currentPage = 1;
  allProducts: any;

  constructor(private products: ProductsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number = 1) {
    this.currentPage = page || 1;
    this.allProducts = [];

    this.products.getProducts(this.currentPage).subscribe({
      next: (data) => {
        this.allProducts = data;

        this.cdr.markForCheck();
      },
      error: (error) => {
        this.allProducts = [];

        this.cdr.markForCheck();
      }
    });
  }
}
