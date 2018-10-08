import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ead-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) { 
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  onCreateButton() {
    if (this.formGroup.valid) {
      this.bookService.createBook(
        this.formGroup.controls.name.value,
        this.formGroup.controls.description.value
      )
      .subscribe(book => {        
        alert(`O livro ${book.name} foi adicionado com sucesso`);
        this.router.navigateByUrl('/books');
      });
    }
  }

}
