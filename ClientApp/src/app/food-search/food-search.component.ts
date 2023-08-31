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
  searchContext = ''; 

  // ngOnInit() {
  //   this.getData('');
  // }

  getData(startingLetters: string) {
    console.log(startingLetters)
    this.foodService.getInfo().subscribe(data => {
      this.foods = data
      .filter(food => food.FOOD_NAME.trim().toLowerCase().startsWith(startingLetters))
      .slice(0, 5);

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


  onClick() {

  }
}



