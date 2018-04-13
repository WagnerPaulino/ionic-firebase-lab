import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Carro } from './../app/domain/carro';
import { Injectable } from "@angular/core";

@Injectable()
export class CarroService{

    carrosColletion: AngularFireList<Carro>;
    constructor(private db: AngularFireDatabase){}

    public findAll(){
        this.carrosColletion = this.db.list('carro');
        return this.carrosColletion.valueChanges();
    }

    public save(carro: Carro){
        console.log(carro);
        this.carrosColletion = this.db.list('carro');
        return this.carrosColletion.push(carro);
    }

}