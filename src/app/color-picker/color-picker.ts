import { Component } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-color-picker',
  imports: [MenuItem],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.css',
})
export class ColorPicker {
  title = "Color Picker Component";
  selectedColor: string = '#000000';

  onColorChange(event: Event) {
    this.selectedColor = (event.target as HTMLInputElement).value;
  }

  resetColor() {
    this.selectedColor = '#000000';
  }
}
