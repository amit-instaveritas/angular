import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterComponent {
  title = "Counter Component";

  number = 0;

  savedNumbers = [
    { value: 1, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() }
  ];

  increment() {
    if (this.number >= 0) {
      this.number++;
    }
  }

  decrement() {
    if (this.number > 0) {
      this.number--;
    }
  }

  addNumber() {
    this.savedNumbers.push({
      value: this.number,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    });

    this.number = 0;
  }

  removeNumber(savedNumber: { value: number; date: string; time: string }) {
    const index = this.savedNumbers.indexOf(savedNumber);
    if (index > -1) {
      this.savedNumbers.splice(index, 1);
    }
  }
}
