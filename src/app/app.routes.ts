import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Counter } from './counter/counter';
import { ColorPicker } from './color-picker/color-picker';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'counter', component: Counter },
  { path: 'color-picker', component: ColorPicker },
  { path: '**', component: PageNotFound }
];
