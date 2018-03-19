import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  recipe$: Observable<Recipe>;

    
  constructor(private recipeService : RecipeService) { 

  }

  ngOnInit() {
      this.recipe$ = this.recipeService.getRecipe("5a830a5e772d8e5875082767")
      this.recipes$ = this.recipeService.getRecipes();
  }

}
