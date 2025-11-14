import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login';
import { FormGroupComponent } from '../../components/form-group/form-group';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule, CommonModule, FormGroupComponent, RouterLink
  ]
})
export class LoginModule { }
