import {Component, input} from '@angular/core';



@Component({
  selector: 'app-case',
  imports: [],
  templateUrl: './case.html',
  styleUrl: './case.css',
})
export class Case {

  colorback = input<number>(1)


  public getcolor(){
    if(this.colorback() == 1){
      return '#FF949D'
    }else {
      return '#f6b4bb'
    }
  }
}
