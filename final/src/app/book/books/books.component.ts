import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ead-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  myBooks;
  booksIBorrowed;
  availableBooks;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { 
    this.loadMyBooks();  
    this.loadBooksIBorrowed();
    this.loadAvailableBooks();
  }

  private loadMyBooks() {
    this.bookService.getBooks('mine')
    .subscribe(books => {
      this.myBooks = books;
    });
  }

  private loadBooksIBorrowed() {
    this.bookService.getBooks('borrowed')
    .subscribe(books => {
      this.booksIBorrowed = books;
    });
  }

  private loadAvailableBooks() {
    this.bookService.getBooks('available')
    .subscribe(books => {
      this.availableBooks = books;
    });
  }

  onCreateButton() {
    this.router.navigateByUrl('/book-registration');
  }

}
