import { SaveCarroPage } from './../save-carro/save-carro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaCarroPage } from '../lista-carro/lista-carro';
import { SaveDonoPage } from '../save-dono/save-dono';
import { ListaDonoPage } from '../lista-dono/lista-dono';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  listaCarro(){
    this.navCtrl.push(ListaCarroPage);
  }
  saveCarro(){
    this.navCtrl.push(SaveCarroPage);
  }

  listaDono(){
    this.navCtrl.push(ListaDonoPage);
  }
  saveDono(){
    this.navCtrl.push(SaveDonoPage);
  }
}
