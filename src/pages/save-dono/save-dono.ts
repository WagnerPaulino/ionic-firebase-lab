import { ListaDonoPage } from './../lista-dono/lista-dono';
import { DonoService } from './../../services/dono.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dono } from '../../domain/dono';

/**
 * Generated class for the SaveDonoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-save-dono',
  templateUrl: 'save-dono.html',
})
export class SaveDonoPage {

  public dono: Dono = new Dono();
  id:any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: DonoService) {
    if(this.navParams.get('key')){
      this.id = this.navParams.get('key');
      this.dono = this.navParams.get('dono')
    }
  }

  ionViewDidLoad() {
  }

  salvar(){
    console.log("Id ao editar: "+this.id);
    if(this.id){
      this.service.editar(this.id, this.dono).then((x)=>{
        console.log(x);
        this.navCtrl.pop();
      });
    }else{
      this.service.inserir(this.dono).then((x:any)=>{
        this.navCtrl.pop();
        this.navCtrl.push(ListaDonoPage)
      });
    }
  }

}
