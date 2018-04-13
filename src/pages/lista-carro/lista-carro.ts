import { Component } from '@angular/core';
import { Carro } from '../../app/domain/carro';
import 'rxjs/add/operator/map';
import { CarroService } from '../../services/carro.service';
import { ActionSheetController } from 'ionic-angular';
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
              private actionSheetCtrl: ActionSheetController) {
    this.service.findAll().subscribe((x)=>{
      console.log(x[0].id);
      this.carros = x;
    });
  }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ações',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
          }
        },{
          text: 'Excluir',
          handler: () => {
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
