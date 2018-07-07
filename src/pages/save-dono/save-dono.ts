import { Carro } from './../../domain/carro';
import { CarroService } from './../../services/carro.service';
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

  public dono: Dono = new Dono('','');
  id:any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: DonoService, private carroService: CarroService) {
    if(this.navParams.get('key')){
      this.id = this.navParams.get('key');
      this.dono = this.navParams.get('dono')
    }
  }

  ionViewDidLoad() {
  }

  salvar(){
    if(this.id){
      let carro: Carro = new Carro();
      this.carroService.findAll().subscribe((carros)=>{
        carros.map((ca)=>{
          ca.payload.val().donos.forEach(element => {
            if(element.key == this.id){
              carro = ca.payload.val();
              carro.key = ca.key
              carro.donos.find((d)=> d.key == this.id).key = this.id;
              carro.donos.find((d)=> d.key == this.id).nome = this.dono.nome;
              this.carroService.editar(carro.key, carro).then((r)=>{
                console.log("Carro atualizado!")
              });
              console.log("Operação finalizada");
              return false;
            }
          });
        })
      })
      this.service.editar(this.id, this.dono).then((x)=>{
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
