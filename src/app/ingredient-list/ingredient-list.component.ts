import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  categories$ : Observable<String[]>
  ingredients$ : Observable<any[]>
    
  constructor(private ingredientService : IngredientService) { }

  ngOnInit() {
      this.categories$ = this.ingredientService.getCategories();
  }
    
  onChange(value){
      this.ingredients$ = this.ingredientService.getIngredientsByCategory(value);
  }

}
