import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { INGREDIENTS } from '../mock-ingredients';
import { Ingredient } from '../models/ingredient';

@Injectable()
export class IngredientService {

    
    constructor(private http: HttpClient) { }
    
    getCategories () :  Observable<String[]>{
        return this.http.get<String[]>("http://localhost:3000/ingredients/categories")
    }
    
    getIngredientsByCategory (category) : Observable<any[]>{
        return this.http.get<any[]>("http://localhost:3000/ingredients/category?category="+category)
    }
    
    addIngredientSynonyme (ingredient,synonyme) : void{
        let httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        console.log( JSON.stringify({id:ingredient._id,ingredient: synonyme.ingredient}))
        this.http.put("http://localhost:3000/ingredients/update",
                       JSON.stringify({id:ingredient._id,ingredient:synonyme.ingredient}),
                       httpOptions
                    ).subscribe((data) => console.log(data));
    }

    getIngredientByBarCode(barcode: string): Ingredient { // Observable<Ingredient>
        return INGREDIENTS.filter(ingredient => ingredient.barcode === barcode)[0];
    }
}
