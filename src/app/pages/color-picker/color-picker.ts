import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  standalone: false,
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.css',
})
export class ColorPickerComponent {
  title = "Color Picker Component";
  selectedColor: string = '#000000';

  onColorChange(event: Event) {
    this.selectedColor = (event.target as HTMLInputElement).value;
  }

  resetColor() {
    this.selectedColor = '#000000';
  }
}
