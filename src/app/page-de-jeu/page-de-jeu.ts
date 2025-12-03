import { Component } from '@angular/core';
import {Plateau} from '../plateau/plateau';
import {Bouton} from '../bouton/bouton';
import {CaseStat} from '../case-stat/case-stat';

@Component({
  selector: 'app-page-de-jeu',
  imports: [
    Plateau,
    Bouton,
    CaseStat
  ],
  templateUrl: './page-de-jeu.html',
  styleUrl: './page-de-jeu.css',
})
export class PageDeJeu {

  Plateau: Plateau = new Plateau();


}
