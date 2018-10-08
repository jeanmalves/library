import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ead-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
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
          this.router.navigateByUrl('/books');
        } else {
          alert('Email inválido ou senha incorreta!');
        }
      });
    }
  }

  navigateToRegistration() {
    this.router.navigateByUrl('/registration');
  }

}
