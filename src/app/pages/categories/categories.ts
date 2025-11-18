import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServices } from '../../services/category/category';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';
import { PaginationComponent } from '../../components/pagination/pagination';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.html',
  styleUrl: './categories.css',
  providers: [CategoryServices, BreadcrumbsComponent, PaginationComponent]
})
export class CategoriesComponent implements OnInit {
  currentPage = 1;
  categories: any;
  category: any;
  categoryId: string | null = null;

  constructor(private CategoryServices: CategoryServices, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

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

  handlePaginationEvent(page: number) {
    this.loadPage(page);
  }

  navigateToCategoryCreate() {
    this.router.navigate(['/categories/create']);
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
