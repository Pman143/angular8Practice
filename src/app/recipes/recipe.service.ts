import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Chocolate', 'This is my chocolate', 'https://cdn.pixabay.com/photo' +
      '/2016/06/15/19/09/food-1459693_960_720.jpg'), new Recipe('Chocolate 2', 'This is my chocolate 2', 'https://cdn.pixabay.com/photo' +
      '/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
