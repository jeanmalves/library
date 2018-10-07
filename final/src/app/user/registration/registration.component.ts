import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'ead-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  formGroup: FormGroup;
  submitted;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { 
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onCreateButton() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.userService.create(
        this.formGroup.controls.name.value,
        this.formGroup.controls.email.value,
        this.formGroup.controls.password.value
      )
      .subscribe(() => {
        if (this.userService.currentUser) {
          alert('Usuário criado com sucesso');
        } else {
          alert('Erro na criação do usuário');
        }
      });
    }
  }

}
