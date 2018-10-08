import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BooksListComponent } from './books-list/books-list.component';
import { BookService } from './book.service';
import { BookRegistrationComponent } from './book-registration/book-registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [
    BooksComponent, 
    BooksListComponent, 
    BookRegistrationComponent
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
