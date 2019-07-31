import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Meat', 'This is my meat', 'https://cdn.pixabay.com/photo' +
      '/2016/06/15/19/09/food-1459693_960_720.jpg'), new Recipe('Meat 2', 'This is my meat 2', 'https://cdn.pixabay.com/photo' +
      '/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
