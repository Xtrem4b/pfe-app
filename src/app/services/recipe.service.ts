import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {
    
    constructor(private http: HttpClient) { }
    
    getRecipes () : Observable<Recipe[]>{
        return this.http.get<Recipe[]>("http://localhost:3000/api/recipes")
    }
    
    getRecipe (id) : Observable<Recipe>{
        return this.http.get<Recipe>("http://localhost:3000/api/recipe/"+id)
    }
    
    getAjr (id) : Observable<any[]>{
        return this.http.get<any>("http://localhost:3000/api/recipe/ajr/"+id)
    }
    
    addRecipe (url) : Observable<any>{
        return this.http.post<any>("http://localhost:3000/api/new/recipe",{url:url})
    }

}
