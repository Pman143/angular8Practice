import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true}) nameField: ElementRef;
  @ViewChild('amountInput', {static: true}) amountField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredient = new Ingredient(this.nameField.nativeElement.value,
      this.amountField.nativeElement.value);
      this.ingredientAdded.emit(ingredient);
  }

}
