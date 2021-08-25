import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/Barley_Kimchi_Sausage_GettyImages-1214116994_1920x1280-700x461.jpg',
    ),
    new Recipe(
      'A Second Recipe',
      'This is a new test',
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2014/08/Ciabatta-1842-x-1212.jpg',
    ),
  ];

  getRecipes() {
    //retorna uma cópia exata do array nesse arquivo
    // assim, ao alterar o array, não mexemos no original
    return this.recipes.slice();
  }
}
