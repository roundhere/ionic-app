import { Component } from '@angular/core';

/**
 * Generated class for the ResultKartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'result-kart',
  templateUrl: 'result-kart.html'
})
export class ResultKartComponent {

  text: string;

  constructor() {
    console.log('Hello ResultKartComponent Component');
    this.text = 'Hello World';
  }

}
