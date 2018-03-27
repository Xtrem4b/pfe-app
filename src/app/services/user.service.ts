import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

    authenticate(email,password) : Observable<any>{
        return this.http.post<any>("http://localhost:3000/api/login",{"email":email,"password":password});
    }

}
