import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {


  count = 0;
  likeAndSubscribe() {
    this.count++;
  }
  response = [1,2,3,4,5,6,7]


}
