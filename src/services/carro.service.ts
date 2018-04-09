import { Injectable } from "@angular/core";
import { Carro } from "../app/domain/carro";
import { AngularFirestoreCollection, AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CarroService{

    carrosColletion: AngularFirestoreCollection<Carro>;

    constructor(private db: AngularFirestore){}

    public findAll(){
        this.carrosColletion = this.db.collection('/carro');
        return this.carrosColletion.valueChanges();
    }

}