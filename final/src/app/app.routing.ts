import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { BooksComponent } from './book/books/books.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'books',
    component: BooksComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);