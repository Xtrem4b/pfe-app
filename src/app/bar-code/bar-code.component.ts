import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/ingredient';

import { ModalService } from '../_services/index';

@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.css']
})
export class BarCodeComponent implements OnInit {

  barcode;
  foundIngredient: Ingredient;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  findIngredient() {
    this.ingredientService.getIngredientByBarCode(this.barcode);
  }

  openModal(id: string){
    // this.modalService.open(id);
  }
}
