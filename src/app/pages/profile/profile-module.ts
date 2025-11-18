import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile';
import { FormConsumerComponent } from '../../components/form-consumer/form-consumer';
import { FormGroupComponent } from '../../components/form-group/form-group';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ɵInternalFormsSharedModule } from "@angular/forms";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule, FormConsumerComponent, FormGroupComponent, RouterLinkActive, RouterLink,
    ɵInternalFormsSharedModule
  ]
})
export class ProfileModule { }
