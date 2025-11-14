import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoryServices } from '../../services/category/category';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class CategoriesComponent implements OnInit {
  currentPage = 1;
  categories: any;
  constructor(private CategoryServices: CategoryServices, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number = 1) {
    this.currentPage = page || 1;
    this.categories = [];

    this.CategoryServices.getCategories(this.currentPage).subscribe({
      next: (data) => {
        this.categories = data;

        this.cdr.markForCheck();
      },
      error: (error) => {
        this.categories = [];

        this.cdr.markForCheck();
      }
    });
  }
}
