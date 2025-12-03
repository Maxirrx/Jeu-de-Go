import {Component, input} from '@angular/core';
import {callbackify} from 'node:util';

@Component({
  selector: 'app-bouton',
  imports: [],
  templateUrl: './bouton.html',
  styleUrl: './bouton.css',
})
export class Bouton {

    name = input<string>();
    callback = input< ((arg?: any) => void) | undefined >(undefined)

    getname(){
      return this.name()
    }

    getCallBack(){
      if (this.callback) {
        console.log(this.callback);
        this.callback();
      }
    }
}
