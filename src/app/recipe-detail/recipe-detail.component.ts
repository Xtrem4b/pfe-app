import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material';


import { RecipeService } from '../services/recipe.service';
import { IngredientLinkDialogComponent } from '../ingredient-link-dialog/ingredient-link-dialog.component'
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})

export class RecipeDetailComponent implements OnInit {
    recipe$: Observable<Recipe>
    ajr$: Observable<any[]>
    

    constructor(private recipeService: RecipeService,   private route: ActivatedRoute, private location: Location, public dialog: MatDialog) { }

    ngOnInit() {
      this.showRecipe();
    }
    
    openDialog(ingredient): void {
        let dialogRef = this.dialog.open(IngredientLinkDialogComponent, {
            height: '800px',
            width: '1200px',
            data: { ingredient: ingredient.ingredient }
        });
    };

    showRecipe() : void {
       this.recipe$ = this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')); 
       this.ajr$ = this.recipeService.getAjr(this.route.snapshot.paramMap.get('id'));
    }

}
