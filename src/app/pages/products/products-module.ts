import { PaginationModule } from './../../components/pagination/pagination-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products';
import { InrUsdPipe } from '../../pipes/inr-usd-pipe';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    InrUsdPipe,
    PaginationModule
  ]
})
export class ProductsModule { }
