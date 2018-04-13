import { Component } from '@angular/core';
import { Carro } from '../../app/domain/carro';
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

  carros: Carro[];

  constructor(private service: CarroService) {
    this.service.findAll().subscribe((x)=>{
      console.log(x);
      this.carros = x;
    });
  }
  cadastrar(){

  }
  editar(id){

  }

}
