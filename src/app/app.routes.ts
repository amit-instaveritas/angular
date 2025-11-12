import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Counter } from './counter/counter';
import { ColorSwitcher } from './color-switcher/color-switcher';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'counter', component: Counter },
  { path: 'color-switcher', component: ColorSwitcher },
  { path: '**', component: PageNotFound }
];
