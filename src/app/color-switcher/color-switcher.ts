import { Component } from '@angular/core';

@Component({
  selector: 'app-color-switcher',
  imports: [],
  templateUrl: './color-switcher.html',
  styleUrl: './color-switcher.css',
})
export class ColorSwitcher {
  selectedColor: string = '#000000';

  onColorChange(event: Event) {
    this.selectedColor = (event.target as HTMLInputElement).value;
  }

  resetColor() {
    this.selectedColor = '#000000';
  }
}
