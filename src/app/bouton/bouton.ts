import {Component, input} from '@angular/core';

@Component({
  selector: 'app-bouton',
  imports: [],
  templateUrl: './bouton.html',
  styleUrl: './bouton.css',
})
export class Bouton {

    name = input<string>();
}
