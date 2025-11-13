import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { ProductsService } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  currentPage = 1;
  errorMessage = '';
  allProducts: any;

  constructor(private products: ProductsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number = 1) {
    this.currentPage = page || 1;
    this.errorMessage = '';
    this.allProducts = [];

    this.products.getProducts(this.currentPage).subscribe({
      next: (data) => {
        this.allProducts = data;

        this.cdr.markForCheck();
      },
      error: (error) => {
        this.errorMessage = 'Failed to load products. Please try again.';

        this.allProducts = [];

        this.cdr.markForCheck();
      }
    });
  }
}
