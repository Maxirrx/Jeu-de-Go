import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-pion',
  imports: [],
  templateUrl: './pion.html',
  styleUrl: './pion.css',
})
export class Pion {

  color = input<number>(1)


  public getcolor(){
    if(this.color() == 1){
      return '#353030'
    }else {
      return '#e6e4e4'
    }
  }
}
