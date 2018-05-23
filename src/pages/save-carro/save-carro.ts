import { ListaCarroPage } from './../lista-carro/lista-carro';
import { CarroService } from './../../services/carro.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../domain/carro';

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
  id:any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: CarroService) {
    if(this.navParams.get('key')){
      this.id = this.navParams.get('key');
      this.carro = this.navParams.get('carro')
    }
  }

  ionViewDidLoad() {
  }

  salvar(){
    console.log("Id ao editar: "+this.id);
    if(this.id){
      this.service.editar(this.id, this.carro).then((x)=>{
        console.log(x);
        this.navCtrl.pop();
      });
    }else{
      this.service.inserir(this.carro).then((x:any)=>{
        this.navCtrl.pop();
        this.navCtrl.push(ListaCarroPage)
      });
    }
  }

}
