import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories';



@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [CategoriesComponent]
})
export class CategoriesModule { }
