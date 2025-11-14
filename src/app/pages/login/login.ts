import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private formGroupService: FormGroupService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  // In your Login component
  onSubmit() {
    this.formGroupService.login().subscribe(
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
