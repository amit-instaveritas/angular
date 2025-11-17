import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CounterComponent } from './pages/counter/counter';
import { ColorPickerComponent } from './pages/color-picker/color-picker';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found';
import { ProfileComponent } from './pages/profile/profile';
import { ProductsComponent } from './pages/products/products';
import { CategoriesComponent } from './pages/categories/categories';
import { LoginComponent } from './pages/login/login';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register';
import { authGuard } from './auth/auth-guard';
import { CategoryCreateComponent } from './pages/categories/category-create/category-create';

export const allRoutes: Routes = [
  // Unauthenticated routes
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/create', component: CategoryCreateComponent },
  { path: 'categories/:id', component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Authenticated routes
  { path: 'profile', canActivate: [authGuard], component: ProfileComponent },

  // Exceptional routessss
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [RouterModule],
})

export class AppRoutes { }
