import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ead-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // email: String;
  // password: String;
  formGroup: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { 
    this.formGroup = this.formBuilder.group({
      email: [null, Validators.email],
      password: [null]
    });
  }

  onLoginButton() {
    if (this.formGroup.valid) {
      this.userService.login(this.formGroup.controls.email.value, this.formGroup.controls.password.value)
      .subscribe(() => {
        if (this.userService.currentUser) {
          alert('login realizado com sucesso');
        } else {
          alert('Email inválido ou senha incorreta!');
        }
      });
    }
  }

}
