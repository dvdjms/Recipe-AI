import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FoodService } from '../food-search/food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css'],
  providers: [FoodService]
})


export class FoodSearchComponent {
  static onSubmitIngredients: any;

  constructor( private foodService:FoodService) {
   
  }

  foods: any[] = [];
  selectedFood: any[] = [];
  searchField = '';  
  ingredients = ''; 


  getData(startingLetters: string) {
    console.log(startingLetters)
    this.foodService.getInfo().subscribe(data => {
      this.foods = data
      .filter(food => food.FOOD_NAME.trim().toLowerCase().startsWith(startingLetters))
      .slice(0, 10);

      if (startingLetters === '') {
        this.foods = [];
      }
    });
  }


  onInputChange() {
    this.getData(this.searchField)
  }

  addFoodItem(foodId: string) {
    for(let i = 0; i < this.foods.length; i++){
      if (foodId === this.foods[i].ID){
        this.selectedFood.push(this.foods[i].FOOD_NAME)
      }
    }
  }

  removeFoodItem(index: number) {
    this.selectedFood.splice(index, 1);
  }

  removeAllFood() {
    this.selectedFood = []
  }

  onSubmitIngredients() {
    for(let i = 0; i < this.selectedFood.length; i++){
      this.ingredients += ', ' + this.selectedFood[i];
    }
    console.log(`I want a recipe with the following ingredients${this.ingredients}.`);
  }

  @ViewChild('container') container!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.container.nativeElement.contains(event.target)) {
      this.searchField = '';
      this.foods = [];
    }
  }


}


