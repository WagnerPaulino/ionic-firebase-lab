import { Component } from '@angular/core';
import { Carro } from '../../app/domain/carro';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CarroService } from '../../services/carro.service';
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

  carros: Observable<Carro[]>;

  constructor(private service: CarroService) {
    this.carros = service.findAll();
  }
  cadastrar(){

  }
  editar(id){

  }

}
