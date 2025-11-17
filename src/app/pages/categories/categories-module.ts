import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories';
import { BreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs-module';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterLink,
    BreadcrumbsModule
  ],
  exports: [CategoriesComponent]
})
export class CategoriesModule { }
