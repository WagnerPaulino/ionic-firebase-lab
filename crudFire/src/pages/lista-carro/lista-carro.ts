import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Carro } from '../../app/domain/carro';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
  
  carrosColletion: AngularFirestoreCollection<any>;
  carros: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.carrosColletion = this.db.collection('/carro');
    this.carros = this.carrosColletion.valueChanges();
  }
  cadastrar(){

  }
  editar(id){

  }

}
