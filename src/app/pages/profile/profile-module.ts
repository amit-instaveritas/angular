import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile';
import { FormConsumerComponent } from '../../components/form-consumer/form-consumer';
import { FormGroupComponent } from '../../components/form-group/form-group';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule, FormConsumerComponent, FormGroupComponent
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
