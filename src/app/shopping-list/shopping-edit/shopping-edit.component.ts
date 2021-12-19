import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("amountInput", { static: true }) amountInput !: ElementRef;
  @ViewChild("nameInput", { static: true }) nameInput !: ElementRef;
  @Output() ingredientsAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {

  }

  onAddItem(): void {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const ingredients = new Ingredient(name, amount);
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
    this.ingredientsAdded.emit(ingredients);
  }
}
