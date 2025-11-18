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
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Authenticated routes
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'counter', canActivate: [authGuard], component: CounterComponent },
  { path: 'color-picker', canActivate: [authGuard], component: ColorPickerComponent },
  { path: 'products', canActivate: [authGuard], component: ProductsComponent },
  { path: 'categories', canActivate: [authGuard], component: CategoriesComponent },
  { path: 'categories/create', canActivate: [authGuard], component: CategoryCreateComponent },
  { path: 'categories/:id', canActivate: [authGuard], component: CategoriesComponent },
  { path: 'profile/:id', canActivate: [authGuard], component: ProfileComponent },
  { path: 'logout', canActivate: [authGuard], component: LoginComponent },

  // Exceptional routessss
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [RouterModule],
})

export class AppRoutes { }
