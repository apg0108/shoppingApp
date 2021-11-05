import { Recipe } from "./../../shared/recipe.model";
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeSelected !: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
