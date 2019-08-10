import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  url = 'https://ng-recipe-book-cba84.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.url, recipes);
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.url).pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }));
  }
}
