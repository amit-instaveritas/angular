import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule
  ],
  exports: [CounterComponent]
})
export class CounterModule { }
