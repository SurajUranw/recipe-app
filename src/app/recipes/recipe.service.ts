import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable() 


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'Pizza', 
        'A super tasty pizza.', 
        'https://upload.wikimedia.org/wikipedia/commons/b/bc/Pizza_pie.jpg',
        [
            new Ingredient('Meat', 1) ,
            new Ingredient('French Fries', 20) 
        ] ), 
      
        new Recipe(
            'Burger', 
            'This is tasty burger.', 
            'https://hillsdalecollegian.com/wp-content/uploads/2021/03/48574958831_a1845ea075_o-1024x684.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ] )  
      
      ]; 

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();  
      }

      getRecipe(index: number) {
          return this.recipes[index];  

      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients); 

      }




} 





