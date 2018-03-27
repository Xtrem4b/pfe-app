import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../mock-users';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

    authenticate(email,password) : Observable<any>{
        return this.http.post<any>("http://localhost:3000/api/login",{"email":email,"password":password});
    }

//   authenticate(email, password): Observable<any> {
//     return this.http.post<any>('http://localhost:3000/login', '{"email": email, "password": password}') // url ???
//     /*.map(user => {
//         if (user) {
//             localStorage.setItem('currentUser', JSON.stringify(user));
//         }
//         return user;
//     })*/;
//   }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  authenticate(email, password) {
    return USERS.filter(user => user.email === email && user.password === password)
    .map(user => {
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    return user;
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  addUser(user: User) {
    USERS.push(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  updateUser(updatedUser: User) {
    const userToUpdate = USERS.filter(user => user.email === updatedUser.email)[0];
    USERS[USERS.indexOf(userToUpdate)] = updatedUser;
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }
}
