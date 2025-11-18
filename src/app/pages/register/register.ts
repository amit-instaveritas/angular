import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroupComponent } from '../../components/form-group/form-group';
import { FormGroupService } from '../../services/form-group/form-group';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroupComponent
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  providers: [FormGroupService]
})
export class RegisterComponent implements OnInit {
  csrfToken: string | null = null;

  fields = [
    { label: 'First Name', type: 'text', controlName: 'first_name', validators: [Validators.required] },
    { label: 'Last Name', type: 'text', controlName: 'last_name', validators: [Validators.required] },
    { label: 'Email', type: 'email', controlName: 'email', validators: [Validators.required, Validators.email] },
    { label: 'Password', type: 'password', controlName: 'password', validators: [Validators.required] },
    { label: 'Confirm Password', type: 'password', controlName: 'confirm_password', validators: [Validators.required] },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private formGroupService: FormGroupService
  ) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/csrf-token')
      .subscribe((response: any) => {
        this.csrfToken = response.csrfToken;
      });
  }

  onSubmit(formData: any) {
    this.formGroupService.register(formData, this.csrfToken).subscribe(
      response => {
        if (response.success) {
          this.router.navigate(['home']);
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
