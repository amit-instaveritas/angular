import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category } from '../../services/category';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  currentPage = 1;
  errorMessage = '';
  categories: any;
  constructor(private category: Category, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number = 1) {
    this.currentPage = page || 1;
    this.errorMessage = '';
    this.categories = [];

    this.category.getCategories(this.currentPage).subscribe({
      next: (data) => {
        this.categories = data;

        this.cdr.markForCheck();
      },
      error: (error) => {
        this.errorMessage = 'Failed to load products. Please try again.';

        this.categories = [];

        this.cdr.markForCheck();
      }
    });
  }
}
