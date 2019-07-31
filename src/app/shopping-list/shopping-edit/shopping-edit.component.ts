import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameField: ElementRef;
  @ViewChild('amountInput', {static: true}) amountField: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {

  }

  addIngredient() {
    const ingName = this.nameField.nativeElement.value;
    const ingAmount = this.amountField.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
