import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products';
import { InrUsdPipe } from '../../pipes/inr-usd-pipe';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    InrUsdPipe
  ]
})
export class ProductsModule { }
