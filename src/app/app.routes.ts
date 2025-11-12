import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Counter } from './pages/counter/counter';
import { ColorPicker } from './pages/color-picker/color-picker';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'counter', component: Counter },
  { path: 'color-picker', component: ColorPicker },
  { path: '**', component: PageNotFound }
];
