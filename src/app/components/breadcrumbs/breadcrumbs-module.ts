import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule { }
