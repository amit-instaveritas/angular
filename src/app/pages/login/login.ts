import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroupComponent } from '../../components/form-group/form-group';
import { FormGroupService } from '../../services/form-group/form-group';

@Component({
  selector: 'app-login',
  standalone: false,
  providers: [FormGroupService, FormGroupComponent, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  fields = [
    { label: 'Email', type: 'email', controlName: 'email', validators: [Validators.required, Validators.email] },
    { label: 'Password', type: 'password', controlName: 'password', validators: [Validators.required] },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private formGroupService: FormGroupService
  ) { }

  // In your Login component
  onSubmit(formData: any) {
    this.formGroupService.login(formData).subscribe(
      response => {
        if (response.success) {
          localStorage.setItem('token', response.token);

          localStorage.setItem('user', JSON.stringify(response.user));

          this.router.navigate(['home']);
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
