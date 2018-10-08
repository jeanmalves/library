import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BooksListComponent } from './books-list/books-list.component';
import { BookService } from './book.service';
import { BookRegistrationComponent } from './book-registration/book-registration.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [BooksComponent, BooksListComponent, BookRegistrationComponent],
  providers: [BookService]
})
export class BookModule { }
