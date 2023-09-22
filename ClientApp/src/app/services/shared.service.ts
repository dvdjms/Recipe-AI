import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class SharedService {

  private selectedIngredients: string[] = [];
  private dataSource$$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  selectedFood$: Observable<string[]> = this.dataSource$$.asObservable();
  foodSentence = '';

	constructor() {}

  updateSelectedFood(food: string[]): void {
    this.selectedIngredients = food;
    this.dataSource$$.next(this.selectedIngredients);
  }

  onFetchRecipe() {
    for(let i = 0; i < this.selectedIngredients.length; i++){
      this.foodSentence += ', ' + this.selectedIngredients[i];
    }
    var sentence = `I want a recipe with the following ingredients${this.foodSentence}.`;
    return sentence;
  }

}

