import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';


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
    experimentalAJR: any;
    nbPersons : number;
    tmp : any;
    

    constructor(private recipeService: RecipeService,   private route: ActivatedRoute, private location: Location, public dialog: MatDialog) { }

    ngOnInit() {
      this.showRecipe();
    }
    
    openDialog(ingredient,pos): void {
        let dialogRef = this.dialog.open(IngredientLinkDialogComponent, {
            height: '800px',
            width: '1200px',
            data: { ingredient: ingredient.ingredient, pos: pos }
        });
        dialogRef.afterClosed().subscribe(result => {
           this.ajr$ = this.recipeService.getAjr(this.route.snapshot.paramMap.get('id'));
        });
    };

    showRecipe() : void {
       this.recipe$ = this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')); 
       this.ajr$ = this.recipeService.getAjr(this.route.snapshot.paramMap.get('id'));
    }

    calculARJrecette() : void {
        let ajr = {
            "calorie":0,
            "proteine":0,
            "glucide":0,
            "lipide":0,
            "sodium":0,
        }
        
        this.ajr$.subscribe(ingredients => {
            this.recipe$.subscribe(recette => {
                if (ingredients.length == recette.ingredients.length){
                    
                    recette.ingredients.forEach((x,index) => {
                        let quantity = (parseFloat(x["quantity"] )|| 0.10)
                        quantity = (x["ingredient"].includes("tranche")) ? quantity * 50 : quantity;
                        //quantity = (x["i"])
                    /*    quantity = (x["quantity"].includes("g")) ? {quantity.replace(/[a-z|/ ]/g,'');
                                                                  } : )*/
                        
                        if (x["quantity"].includes("g")){
                            x["quantity"].replace(/[a-z|/ ]/g,'')
                            quantity = parseFloat(x["quantity"])
                        }
                        
                        let conditions = ["tranche", "cuillère", "verre"];
                        
                        //!x["ingredient"].includes("tranche") && !x["ingredient"].includes("cuillère")
                        
                        if (!x["quantity"].includes("g") && !conditions.some(el => x["ingredient"].includes(el))){
                            console.log(ingredients[index])
                            quantity = quantity*100
                        }
                        
                        
                        ajr.calorie += (quantity * ( (parseFloat(ingredients[index].energy_kcal) || 0)))/100 ;
                        ajr.glucide += (quantity * ((parseFloat(ingredients[index].glucide) || 0)))/100;
                        ajr.lipide += (quantity * (( parseFloat(ingredients[index].lipide) || 0)))/100;
                        ajr.proteine += (quantity * ((parseFloat(ingredients[index].proteine) || 0)))/100;
                        ajr.sodium += (quantity * ((parseFloat(ingredients[index].sel) || 0)))/100;
                                                console.log(parseFloat(ingredients[index].energy_kcal))

                    })
                    this.tmp = this.deepCopy(ajr);
                        
                   this.experimentalAJR = ajr;
                }else{
                    console.log("On ne peut pas calculer les ajr tout les ingredients ne sont pas disponible")
                }
            })
        });
    }
    
    deepCopy(obj) : any {
        var copy;
        if (null == obj || "object" != typeof obj) return obj;
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.deepCopy(obj[i]);
            }
            return copy;
        }
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr]);
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
    
    divByPersons() : void {
        if (this.tmp){
                    console.log(this.tmp)

            for(let key in this.experimentalAJR ){
                this.experimentalAJR[key] = this.tmp[key]/this.nbPersons
            }
        }else{
            for(let key in this.experimentalAJR ){
                this.experimentalAJR[key] = this.experimentalAJR[key]/this.nbPersons
            }
        }
        
    }

}
