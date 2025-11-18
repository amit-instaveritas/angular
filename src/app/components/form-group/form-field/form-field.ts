import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './form-field.html',
  styleUrls: ['./form-field.css']
})
export class FormFieldComponent {

  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() cssClass: string = '';
  @Input() options: Array<{ label: string; value: any }> = [];
  @Input() multiple: boolean = false;

  // getter to avoid null errors
  get control(): FormControl {
    return this.form.get(this.controlName) as FormControl;
  }
}
