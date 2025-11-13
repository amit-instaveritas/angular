import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products';
import { Category } from '../../services/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule],
})
export class Home {
  title = 'Home Component';
  currencyAmount = 1000;
  productsCount = 0;
  categoriesCount = 0;
  constructor(private productsService: ProductsService, private category: Category) { }

  ngOnInit() {
    // Get products count.
    this.productsService.getProducts(1).subscribe({
      next: (data: any) => {
        console.log(data);

        this.productsCount = data.total || 0;
      },
      error: (error) => {
        this.productsCount = 0;
      }
    });

    // Get categories count.
    this.category.getCategories(1).subscribe({
      next: (data: any) => {
        this.categoriesCount = data.total || 0;
      },
      error: (error) => {
        this.categoriesCount = 0;
      }
    });
  }
}

