import { Dono } from './../../domain/dono';
import { DonoService } from './../../services/dono.service';
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
  //public donos: Array<Dono> = new Array<Dono>();
  id:any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: CarroService, private donoService: DonoService) {
    if(this.navParams.get('key')){
      this.id = this.navParams.get('key');
      this.service.findOneByKey(this.id).snapshotChanges().subscribe((x)=>{
        this.carro.key = x.key;
        this.carro = x.payload.val();
    })
  }
}

  ionViewDidLoad() {
    if(!this.navParams.get('key')){
      console.log(this.id)
      this.donoService.findAll().subscribe((x)=>{
        x.forEach((element)=>{
          let y = element.payload.toJSON();
          y["key"] = element.key;
          let z: Dono = new Dono(y["key"],y["nome"]);
          this.carro.donos.push(z);
        })
      });
    }
  }

  salvar(){
    if(this.id){
      this.service.editar(this.id, this.carro).then((x)=>{
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
