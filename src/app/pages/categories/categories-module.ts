import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';



@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterLink,
    // BreadcrumbsComponent
  ],
  exports: [CategoriesComponent]
})
export class CategoriesModule { }
