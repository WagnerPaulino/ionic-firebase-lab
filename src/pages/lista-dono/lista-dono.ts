import { SaveDonoPage } from './../save-dono/save-dono';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { DonoService } from '../../services/dono.service';
import { ActionSheetController, NavController } from 'ionic-angular';
import { Dono } from '../../domain/dono';
/**
 * Generated class for the ListaDonoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-dono',
  templateUrl: 'lista-dono.html',
})
export class ListaDonoPage {

  donos: Dono[];
  
  constructor(private service: DonoService,
    private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController) {
      this.service.findAll().subscribe((x)=>{
        this.donos = [];
        x.forEach((element)=>{
          let y = element.payload.toJSON();
          y["$key"] = element.key;
          this.donos.push(y as Dono);
      })
    });
  }

  openMenu(key,dono) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ações',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.push(SaveDonoPage,{key:key,dono:dono});
          }
        },{
          text: 'Excluir',
          handler: () => {
            this.service.remover(key).then(()=>{
              this.service.findAll().subscribe((x)=>{
                this.donos = [];
                x.forEach((element)=>{
                  let y = element.payload.toJSON();
                  y["$key"] = element.key;
                  this.donos.push(y as Dono);
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
