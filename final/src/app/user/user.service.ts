import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class UserService {

  currentUser;
  
  constructor(
    private http: Http
  ) { }

  login(email: String, password: String): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}&password=${password}`)
    .pipe(
      tap(res => {
        const users = res.json();
        if (users.length > 0) {
          this.currentUser = users[0];
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        } 
      })
    );
  }

  create(name:String, email:String , password: String) {
    return this.http.post(`http://localhost:3000/users`, {
      name: name,
      email: email,
      password: password
    })
    .pipe(
      tap(res => {
        this.currentUser = res.json();
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      })
    );
  }
   
}
