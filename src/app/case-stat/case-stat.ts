import {Component, input} from '@angular/core';

@Component({
  selector: 'app-case-stat',
  imports: [],
  templateUrl: './case-stat.html',
  styleUrl: './case-stat.css',
})
export class CaseStat {

  name = input<string>();
  numero = input<string>();

  getname(){
    return this.name();
  }

  getnumero(){
    return this.numero();
  }


}
