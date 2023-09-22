import { Component, ElementRef, HostListener, ViewChild, Input, Inject } from '@angular/core';
import { FoodService } from '../food-search/food.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css'],
  providers: [FoodService]
})

export class FoodSearchComponent {

  constructor( private foodService: FoodService, private sharedService: SharedService) {}

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
    this.sharedService.updateSelectedFood(this.selectedFood)
  }

  removeFoodItem(index: number) {
    this.selectedFood.splice(index, 1);
  }

  removeAllFood() {
    this.selectedFood = []
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


