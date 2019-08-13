import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  url = 'https://ng-recipe-book-cba84.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.url, recipes);
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(
      this.url).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {// Tap // Just Executes Some Code In Place, Not Returning It
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      })
    );

  }

  saveEditedRecipe(index: number, newRecipe: Recipe) {
    return this.http.put<Recipe>('https://ng-recipe-book-cba84.firebaseio.com/recipes/'
      + index + '.json', newRecipe);
  }

  deleteRecipe(index: number) {
        return this.http.delete('https://ng-recipe-book-cba84.firebaseio.com/recipes/'
          + index + '.json',);
  }
}
