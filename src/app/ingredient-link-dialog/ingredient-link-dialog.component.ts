import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { IngredientService } from '../services/ingredient.service';


@Component({
  selector: 'app-ingredient-link-dialog',
  templateUrl: './ingredient-link-dialog.component.html',
  styleUrls: ['./ingredient-link-dialog.component.css']
})

export class IngredientLinkDialogComponent implements OnInit {
  categories$ : Observable<String[]>
  ingredients$ : Observable<any[]>
    

    
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ingredientService : IngredientService){ }

  ngOnInit() {
    this.categories$ = this.ingredientService.getCategories();
  }
    
  onChange(value){
    this.ingredients$ = this.ingredientService.getIngredientsByCategory(value);
  }
    
  addSynonyme(ingredient){
      this.ingredientService.addIngredientSynonyme(ingredient,this.data)
  }

}
