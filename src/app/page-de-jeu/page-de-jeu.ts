import { Component } from '@angular/core';
import {Plateau} from '../plateau/plateau';
import {Bouton} from '../bouton/bouton';

@Component({
  selector: 'app-page-de-jeu',
  imports: [
    Plateau,
    Bouton
  ],
  templateUrl: './page-de-jeu.html',
  styleUrl: './page-de-jeu.css',
})
export class PageDeJeu {

}
