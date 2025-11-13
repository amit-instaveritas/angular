import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Counter } from './pages/counter/counter';
import { ColorPicker } from './pages/color-picker/color-picker';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Profile } from './pages/profile/profile';
import { Products } from './pages/products/products';
import { Categories } from './pages/categories/categories';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'counter', component: Counter },
  { path: 'color-picker', component: ColorPicker },
  { path: 'profile', component: Profile },
  { path: 'products', component: Products },
  { path: 'categories', component: Categories },
  { path: '**', component: PageNotFound }
];
