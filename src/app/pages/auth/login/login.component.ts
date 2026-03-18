import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginForm: FormGroup
  email: FormControl
  password: FormControl

  constructor() {
    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  handleSubmitLogin() {
    console.log(this.loginForm.value)
  }
}
