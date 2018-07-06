import { SaveCarroPage } from './../save-carro/save-carro';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { CarroService } from '../../services/carro.service';
import { ActionSheetController, NavController } from 'ionic-angular';
import { Carro } from '../../domain/carro';
/**
 * Generated class for the ListaCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-carro',
  templateUrl: 'lista-carro.html',
})
export class ListaCarroPage {

  carros: Carro[];
  
  constructor(private service: CarroService,
    private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController) {
      this.service.findAll().subscribe((x)=>{
        this.carros = [];
        x.forEach((element)=>{
          let y = element.payload.toJSON();
          y["key"] = element.key;
          this.carros.push(y as Carro);
      })
      this.service.findOneByDono();
    });
  }

  openMenu(key) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ações',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.push(SaveCarroPage,{key:key});
          }
        },{
          text: 'Excluir',
          handler: () => {
            this.service.remover(key).then(()=>{
              this.service.findAll().subscribe((x)=>{
                this.carros = [];
                x.forEach((element)=>{
                  let y = element.payload.toJSON();
                  y["key"] = element.key;
                  this.carros.push(y as Carro);
                })
              });
            });
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

}
