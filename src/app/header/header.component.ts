import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated = false;
  userEmail = null;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;// !user ? false : true;
    });
  }

  onSaveData() {
   this.userSub = this.dataStorageService.saveRecipes().subscribe(
      recipeSaved => {
        console.log(recipeSaved);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  private getEmail(){
   return this.authService.user.subscribe(user => {
      this.userEmail = user.email;
    });
  }

  onLogout(){
    this.authService.logout();
  }

}
