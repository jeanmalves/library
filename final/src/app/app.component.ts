import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    if(localStorage.currentUser) {
      this.userService.currentUser = JSON.parse(localStorage.currentUser);
      if (window.location.pathname === '/') {
        this.router.navigateByUrl('/books');
      } 
    } else {
      this.router.navigateByUrl('/login');      
    }
  }
}
