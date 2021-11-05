import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A test recipe1', 'Any Description1', 'https://i.pinimg.com/originals/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'),
    new Recipe('A test recipe3', 'Any Description3', 'https://i.pinimg.com/originals/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'),
    new Recipe('A test recipe2', 'Any Description2', 'https://i.pinimg.com/originals/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeSelected.emit(recipeSelected);
  }

}
