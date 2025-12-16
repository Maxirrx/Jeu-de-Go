import {Component, inject, signal} from '@angular/core';
import {Case} from '../case/case';
import {Pion} from '../pion/pion';
import {Coup} from '../coup';
import {LocalstorageService} from '../localstorage-service';

@Component({
  selector: 'app-plateau',
  imports: [Case, Pion],
  templateUrl: './plateau.html',
  styleUrl: './plateau.css',
})
export class Plateau {

  plateau_affichage: number[] = []
  plateau_jeu: number[] = []
  historiquegame: Coup[] = []
  player = 1
  historique: Coup[][] = []
  toto = inject(LocalstorageService)

  nbcoupblanc = signal(0);
  nbcoupnoir = signal(0);
  nbcouptotal = signal(0);


  constructor() {
    let j = 0
    for (let i = 0; i < 64; i++) {
      if (i % 8 == 0) {
        j = i / 8
      }
      let y = (i + j) % 2
      this.plateau_affichage.push(y);

    }
    for (let i = 0; i < 81; i++) {
      this.plateau_jeu.push(0);

    }
    this.historique = this.toto.initLocalstorage()

  }


  leftclick(idcase: number): void {
    if (this.plateau_jeu[idcase] == 0) {
      this.plateau_jeu[idcase] = this.player;
      if (this.player == 1) {
        this.player = 2;
        const coup: Coup = {
          position: idcase,
          action: 1
        }
        this.nbcoupnoir.update(v => v + 1);
        this.historiquegame.push(coup)
      } else {
        this.player = 1;
        const coup: Coup = {
          position: idcase,
          action: 2
        }
        this.historiquegame.push(coup)
        this.nbcoupblanc.update(v => v + 1);

      }
      this.nbcouptotal.update(v => v + 1);

    }

  }

  rightclick(idcase: number, e: Event): void {
    e.preventDefault()
    if (this.plateau_jeu[idcase] != 0) {
      this.plateau_jeu[idcase] = 0;
      const coup: Coup = {
        position: idcase,
        action: -1
      }
      this.historiquegame.push(coup)
    }
  }

  saveHistory() {
    this.historique.push(this.historiquegame)
    localStorage.setItem('historique', JSON.stringify(this.historique));
  }

  passerSonTour(){
    if (this.player == 1) {
      this.player = 2;
      const coup: Coup = {
        position: 1000,
        action: 1
      }
      this.historiquegame.push(coup)
    } else {
      this.player = 1;
      const coup: Coup = {
        position: 1000,
        action: 2
      }
      this.historiquegame.push(coup)

    }}





}
