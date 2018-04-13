import { ListaCarroPage } from './../lista-carro/lista-carro';
import { CarroService } from './../../services/carro.service';
import { Carro } from './../../app/domain/carro';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SaveCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-save-carro',
  templateUrl: 'save-carro.html',
})
export class SaveCarroPage {

  public carro: Carro = new Carro();

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: CarroService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveCarroPage');
  }

  salvar(){
    console.log(this.carro);
    this.service.save(this.carro).then((x)=>{
      this.navCtrl.pop();
      this.navCtrl.push(ListaCarroPage)
      console.log(x);
    });
  }

}
