import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {

  constructor() {
  }

  initLocalstorage() {
  let history : any
  try {
      history = localStorage.getItem('historique')
    if (history) {
      return  JSON.parse(history)
    }else {
      return [];
    }
    }catch (e) {
      return []
    }

  }


}
