import { Routes } from '@angular/router';
import {Case} from './case/case';
import {Plateau} from './plateau/plateau';
import {PageDeJeu} from './page-de-jeu/page-de-jeu';
import {Bouton} from './bouton/bouton';

export const routes: Routes = [
  {  path: 'max',  component: PageDeJeu},
];
