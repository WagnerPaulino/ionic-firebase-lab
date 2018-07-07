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
        this.carrosColletion = this.db.list('carro');
        return this.carrosColletion.push(carro);
    }

    public editar(id, carro:Carro){
        let ref = this.db.object("/carro/"+id);
        return ref.update({donos: carro.donos, modelo:carro.modelo});
    }

    public remover(id){
        return this.carrosColletion.remove(id);
    }

    // public findOneByDono(key?){
    //     return this.db.list('carro').query.orderByChild("donos").on("value",(snapshot)=> console.log(snapshot.val()));
    // }

}