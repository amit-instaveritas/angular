import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Products } from './../../services/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule],
})
export class Home {
  title = 'Home Component';
  currencyAmount = 1000;

  products: any;

  constructor(private Products: Products) { }

  ngOnInit() {
    this.Products.getProducts().subscribe((data) => {
      console.log(data);

      this.products = data;
    });
  }

  loadPage(page: number) {
    this.Products.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
