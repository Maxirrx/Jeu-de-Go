import {Component, ViewChild} from '@angular/core';
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

  @ViewChild(Plateau)
  plateau!: Plateau;


  passer = () => {
    this.plateau.passerSonTour();
  };

  reset = () => {
    window.location.reload();

  };
  


  getNbCoup(): string {
    return this.plateau?.nbcouptotal().toString() ?? '0';
  }

  getNbCoupNoir(): string {
    return this.plateau?.nbcoupnoir().toString() ?? '0';
  }

  getNbCoupBlanc(): string {
    return this.plateau?.nbcoupblanc().toString() ?? '0';
  }


}
