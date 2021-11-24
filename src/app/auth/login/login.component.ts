import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth, LoginForm } from 'src/app/interfaces/auth.interface';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.email
        ]),
      password: formBuilder.control('',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]
      )
    });
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    let formData: LoginForm = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.loginService.login(formData).subscribe(
      (data: Auth) => {
        this.authService.setToken(data.token);
        this.router.navigate(['/users'])
      },
      (error) => this.errorMsg = error.error.error
    )
  }

}
