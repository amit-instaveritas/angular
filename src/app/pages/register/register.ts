import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from '../../components/form-group/form-group';
import { FormGroupService } from '../../services/form-group/form-group';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { tenDigitValidator } from '../../validators/ten-digit.validator';

@Component({
  selector: 'app-register',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  providers: [FormGroupComponent, ReactiveFormsModule]
})

export class RegisterComponent {
  registerForm: FormGroup;
  nameFormGroup: FormGroup;
  genderFormGroup: FormGroup;
  dobFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  contactFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private formGroupService: FormGroupService, private router: Router) {
    this.registerForm = this.createRegisterForm();
    this.nameFormGroup = this.createNameFormGroup();
    this.genderFormGroup = this.createGenderFormGroup();
    this.dobFormGroup = this.createDOBFormGroup();
    this.addressFormGroup = this.createAddressFormGroup();
    this.contactFormGroup = this.createContactFormGroup();
  }

  createRegisterForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createNameFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  createGenderFormGroup(): FormGroup {
    return this.formBuilder.group({
      gender: ['', Validators.required]
    });
  }

  createDOBFormGroup(): FormGroup {
    return this.formBuilder.group({
      dob: ['', Validators.required]
    });
  }

  createAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      address: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  createContactFormGroup(): FormGroup {
    return this.formBuilder.group({
      phoneNumber: ['', [Validators.required, tenDigitValidator('Phone number is required and must be 10 digits')]]
    });
  }

  onSubmit() {
    this.formGroupService.register().subscribe(
      response => {
        if (response.success) {
          this.router.navigate(['/']);
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
