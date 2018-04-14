import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Carro } from './../app/domain/carro';
import { Injectable } from "@angular/core";

@Injectable()
export class CarroService{

    carrosColletion: AngularFireList<Carro>;
    constructor(private db: AngularFireDatabase){}

    public findAll(){
        this.carrosColletion = this.db.list('carro');
        return this.carrosColletion.snapshotChanges()
    }

    public inserir(carro: Carro){
        console.log(carro);
        this.carrosColletion = this.db.list('carro');
        return this.carrosColletion.push(carro);
    }

    public editar(id, carro:Carro){
        console.log(id);
        let ref = this.db.object("/carro/"+id);
        return ref.update({dono: carro.dono, modelo:carro.modelo});
    }

    public remover(id){
        return this.carrosColletion.remove(id);
    }

}