import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../../services/products/products';
import { CategoryServices } from '../../services/category/category';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  title = 'Home Component';
  currencyAmount = 1000;
  productsCount = 0;
  categoriesCount = 0;
  constructor(private productsService: ProductsService, private CategoryServices: CategoryServices, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Get products count.
    this.productsService.getProducts(1).subscribe({
      next: (data: any) => {
        this.productsCount = data.total || 0;

        this.cdr.markForCheck();
      },
      error: (error) => {
        this.productsCount = 0;

        this.cdr.markForCheck();
      }
    });

    // Get categories count.
    this.CategoryServices.getCategories(1).subscribe({
      next: (data: any) => {
        this.categoriesCount = data.total || 0;

        this.cdr.markForCheck();
      },
      error: (error) => {
        this.categoriesCount = 0;

        this.cdr.markForCheck();
      }
    });
  }
}

