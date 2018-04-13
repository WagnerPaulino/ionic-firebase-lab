import { SaveCarroPage } from './../save-carro/save-carro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaCarroPage } from '../lista-carro/lista-carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irCarro(){
    this.navCtrl.push(ListaCarroPage);
  }
  saveCarro(){
    this.navCtrl.push(SaveCarroPage);
  }
}
