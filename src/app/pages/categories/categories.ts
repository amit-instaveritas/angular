import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryServices } from '../../services/category/category';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.html',
  styleUrl: './categories.css',
  providers: [CategoryServices, BreadcrumbsComponent]
})
export class CategoriesComponent implements OnInit {
  currentPage = 1;
  categories: any;
  category: any;
  categoryId: string | null = null;

  constructor(private CategoryServices: CategoryServices, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');

      if (this.categoryId) {
        this.loadSingleCategory(this.categoryId);
      } else {
        this.loadPage(this.currentPage);
      }
    });
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

  loadSingleCategory(id: string) {
    this.CategoryServices.getCategoryById(id).subscribe({
      next: (data) => {
        console.log(this.category);

        this.category = data;
        this.cdr.markForCheck();
      },
      error: () => {
        this.category = [];
        this.cdr.markForCheck();
      }
    });
  }
}
