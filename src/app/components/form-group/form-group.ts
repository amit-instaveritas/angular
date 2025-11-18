import { FormGroupService } from './../../services/form-group/form-group';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormFieldComponent } from './form-field/form-field';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './form-group.html',
  styleUrls: ['./form-group.css'],
  providers: [FormGroupService]
})
export class FormGroupComponent implements OnInit {

  @Input() fields: any[] = [];
  @Input() submitLabel: string = 'Submit';
  @Input() redirectRegister: boolean = false;
  @Input() redirectLogin: boolean = false;
  @Output() formSubmit = new EventEmitter();

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    const group: any = {};

    this.fields = this.fields.map(field => ({
      controlName: field.controlName,
      label: field.label ?? '',
      type: field.type ?? 'text',
      placeholder: field.placeholder ?? '',
      cssClass: field.cssClass ?? '',
      options: field.options ?? [],
      multiple: field.multiple ?? false,
      value: field.value ?? '',
      validators: field.validators ?? []
    }));

    this.fields.forEach(field => {
      group[field.controlName] = [
        field.value,
        field.validators
      ];
    });

    this.form = this.fb.group(group);
  }

  /**
   * Redirects to the register page.
   * Uses the Angular router to navigate to the register page.
   */
  redirectToRegister() {
    this.router.navigate(['register']);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
      console.warn('Form Invalid');
    }
  }
}
