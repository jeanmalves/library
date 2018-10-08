import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ead-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input('header') header;
  @Input('books') books;

  constructor() { }

  ngOnInit() {}

}
