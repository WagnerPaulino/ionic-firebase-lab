import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import { Carro } from '../domain/carro';

@Injectable()
export class CarroService{

    carrosColletion: AngularFireList<Carro>;
    constructor(private db: AngularFireDatabase){}

    public findAll(){
        this.carrosColletion = this.db.list('carro');
        return this.carrosColletion.snapshotChanges()
    }

    public findOneByKey(key): AngularFireObject<Carro>{
        return this.db.object('/carro/'+key);
    }

    public inserir(carro: Carro){
        console.log(carro);
        this.carrosColletion = this.db.list('carro');
        return this.carrosColletion.push(carro);
    }

    public editar(id, carro:Carro){
        console.log(id);
        let ref = this.db.object("/carro/"+id);
        return ref.update({donos: carro.donos, modelo:carro.modelo});
    }

    public remover(id){
        return this.carrosColletion.remove(id);
    }

}