import { Component } from '@angular/core';
import { FoodService } from '../food-search/food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css'],
  providers: [FoodService],
  template: '<h1>Hello World!</h1>'
})


export class FoodSearchComponent {

  constructor( private foodService:FoodService) {
   
  }

  foods: any[] = [];
  selectedFood: any[] = [];
  searchContext = ''; 

  // ngOnInit() {
  //   this.getData('');
  // }

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


  onKeyPressMove(event: KeyboardEvent) {
    const pressedKey = event.key.toLowerCase();

    if ((event.keyCode < 65 || event.keyCode > 90) && event.keyCode !== 8) {
      event.preventDefault();
    }
    else if (pressedKey.length > 1) {
      this.searchContext = this.searchContext.slice(pressedKey.length - pressedKey.length, -1);
    }
    else {
      this.searchContext += pressedKey;
    }
    this.getData(this.searchContext);

  }


  addFoodItem(foodId: string) {
    for(let i = 0; i < this.foods.length; i++){
      if (foodId === this.foods[i].ID){
        this.selectedFood.push(this.foods[i].FOOD_NAME)
      }
    }
  }

  removeFoodItem(food: string){
    // Make an array object - food item number needed!

    console.log(food)
  }


}



