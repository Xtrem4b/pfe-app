import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AsyncLocalStorage } from 'angular-async-local-storage';

//import { USERS } from '../mock-users';


@Injectable()
export class UserService {

  constructor(private http: HttpClient,protected localStorage: AsyncLocalStorage) { }

    authenticate(email,password) : Observable<any> {
        return this.http.post<any>("http://localhost:3000/api/login",{"email":email,"password":password})
    }
    
    register(email,password,login) : Observable<any> {
        return this.http.post<any>("http://localhost:3000/api/register",{"user":{"email":email,"password":password,"login":login}})
    }
    
    getAjr(id,days=30) : Observable<any> {
        return this.http.get<any>("http://localhost:3000/api/profil/getAJR/"+id+"/"+days+"")
    }
    
    getFoodByCode(code) : Observable<any> {
        return this.http.get<any>("http://localhost:3000/api/openFoodFact/"+code)
    }
    
    addFood(id,code,lunch,custom_quantity) : Observable<any> {
        return this.http.post<any>("http://localhost:3000/api/profil/update/processedFood",{id:id,code:code,lunch:lunch,custom_quantity:custom_quantity})
    }
    
    getLunch(id,days = 3) : Observable<any> {
        return this.http.get<any>("http://localhost:3000/api/profil/getLunch/"+id+"/"+days+"")
    }
    
    updateProfil(profil) : Observable<any> {
        return this.http.put<any>("http://localhost:3000/api/profil/update",
          {user:
           {
                id: profil.id,
                sexe:profil.sexe,
                age:profil.age,
                taille:profil.taille,
                poids:profil.poids,
                tabac:profil.tabac,
                activite:profil.activite,
                alimentation:profil.alimentation
           }
          })
    }
}
