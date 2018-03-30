import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  recipe$: Observable<Recipe>;
  recipeURL: any;

    
  constructor(private recipeService : RecipeService,private route: ActivatedRoute, private router: Router,private location: Location) { 

  }

  ngOnInit() {
      this.recipes$ = this.recipeService.getRecipes();
  }
    
  addRecipe() {
      this.recipeService.addRecipe(this.recipeURL).subscribe( data => {
          this.router.navigate(["/recipe/"+data.insertedIds[0]])
    })
  }

}
