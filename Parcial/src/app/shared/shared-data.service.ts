import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private ref: String = '';

  setTexto(valor: String) {
    this.ref = valor;
  }

  getTexto() {
    return this.ref;
  }

  constructor() { }
}
