import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: Http,
    private userService: UserService
  ) { }

  getBooks(filter) {
    
    let param;

    switch (filter) {
      case 'mine':
        param = `userId=${this.userService.currentUser.id}`;
      break;
      case 'borrowed': 
        param = `loan.userId=${this.userService.currentUser.id}`
      break;
      case 'available':
        param = `loan=false`
      break;
    }
    return this.http.get(`http://localhost:3000/books?${param}`)
    .pipe(
      map(res => res.json())
    );
  }
}
