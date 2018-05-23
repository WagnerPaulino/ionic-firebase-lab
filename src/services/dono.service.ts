import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import { Dono } from '../domain/dono';

@Injectable()
export class DonoService{

    donosColletion: AngularFireList<Dono>;
    constructor(private db: AngularFireDatabase){}

    public findAll(){
        this.donosColletion = this.db.list('dono');
        return this.donosColletion.snapshotChanges()
    }

    public inserir(dono: Dono){
        console.log(dono);
        this.donosColletion = this.db.list('dono');
        return this.donosColletion.push(dono);
    }

    public editar(id, dono:Dono){
        console.log(id);
        let ref = this.db.object("/dono/"+id);
        return ref.update({nome: dono.nome, cidade: dono.cidade, idade: dono.idade});
    }

    public remover(id){
        return this.donosColletion.remove(id);
    }

}