import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormGroupService } from '../../services/form-group/form-group';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { tenDigitValidator } from '../../validators/ten-digit.validator';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class RegisterComponent {
  registerForm: FormGroup;
  csrfToken: string | null = null;
  nameFormGroup: FormGroup;
  genderFormGroup: FormGroup;
  dobFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  contactFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private formGroupService: FormGroupService, private router: Router, private http: HttpClient) {
    this.registerForm = this.createRegisterForm();
    this.nameFormGroup = this.createNameFormGroup();
    this.genderFormGroup = this.createGenderFormGroup();
    this.dobFormGroup = this.createDOBFormGroup();
    this.addressFormGroup = this.createAddressFormGroup();
    this.contactFormGroup = this.createContactFormGroup();
  }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/csrf-token', { withCredentials: true }).subscribe((response: any) => {
      this.csrfToken = response.csrfToken;
    });
  }

  createRegisterForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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
    let headers: HttpHeaders;
    if (this.csrfToken) {
      headers = new HttpHeaders().set('X-CSRF-Token', this.csrfToken);
    } else {
      console.error('CSRF token is missing');
      return;
    }

    this.formGroupService.register(this.csrfToken).subscribe(
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
