import { tenDigitValidator } from '../../validators/ten-digit.validator';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormGroupService } from '../../services/form-group/form-group';
import { NameSection, GenderSection, DOBSection, AddressSection, ContactSection } from '../../types/form-group.types';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule, CommonModule],
  providers: [FormGroupService],
  templateUrl: './form-group.html',
  styleUrl: './form-group.css',
})
export class FormGroupComponent implements OnInit {
  form: FormGroup;
  nameFormGroup: FormGroup;
  genderFormGroup: FormGroup;
  dobFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  contactFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private formGroupService: FormGroupService) {
    this.form = this.createMainForm();
    this.nameFormGroup = this.createNameFormGroup();
    this.genderFormGroup = this.createGenderFormGroup();
    this.dobFormGroup = this.createDOBFormGroup();
    this.addressFormGroup = this.createAddressFormGroup();
    this.contactFormGroup = this.createContactFormGroup();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      this.updateServiceData();
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
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  createMainForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]],
      phoneNumber: ['', [Validators.required, tenDigitValidator('Phone number is required and must be 10 digits')]]
    });
  }

  getSection(sectionType: string): any {
    switch (sectionType) {
      case 'name':
        return this.nameFormGroup.value as NameSection;
      case 'gender':
        return this.genderFormGroup.value as GenderSection;
      case 'dob':
        return this.dobFormGroup.value as DOBSection;
      case 'address':
        return this.addressFormGroup.value as AddressSection;
      case 'contact':
        return this.contactFormGroup.value as ContactSection;
      default:
        return null;
    }
  }

  // Method to get specific form group by type
  getFormGroup(sectionType: string): FormGroup | null {
    switch (sectionType) {
      case 'name':
        return this.nameFormGroup;
      case 'gender':
        return this.genderFormGroup;
      case 'dob':
        return this.dobFormGroup;
      case 'address':
        return this.addressFormGroup;
      case 'contact':
        return this.contactFormGroup;
      default:
        return null;
    }
  }

  // Update service with current form data
  private updateServiceData(): void {
    this.formGroupService.updateSection('name', this.getSection('name'));
    this.formGroupService.updateSection('gender', this.getSection('gender'));
    this.formGroupService.updateSection('dob', this.getSection('dob'));
    this.formGroupService.updateSection('address', this.getSection('address'));
    this.formGroupService.updateSection('contact', this.getSection('contact'));
  }

  // Called when the form is submitted.
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      console.log('Name Section:', this.getSection('name'));
      console.log('DOB Section:', this.getSection('dob'));
    }
  }
}
