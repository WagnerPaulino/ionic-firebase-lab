import { CarroService } from './carro.service';
import { Carro } from './../domain/carro';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import { Dono } from '../domain/dono';

@Injectable()
export class DonoService{

    donosColletion: AngularFireList<Dono>;
    carroCollection: AngularFireList<Carro>;
    constructor(private db: AngularFireDatabase, private carroService: CarroService){}

    public findAll(){
        this.donosColletion = this.db.list('dono');
        return this.donosColletion.snapshotChanges()
    }

    public inserir(dono: Dono){
        this.donosColletion = this.db.list('dono');
        return this.donosColletion.push(dono);
    }

    public editar(id, dono:Dono){
        let ref = this.db.object("/dono/"+id);
        let carroRef = this.db.list("/carro");
        carroRef.query.once('value', (snapshot) => {//once para busca somente uma vez evitando loops
            snapshot.forEach(r => {
                let carro: Carro = new Carro();
                let flag: boolean = false;
                r.val().donos.map(element => {
                    let keyDonoCarro = element.key;
                    if(id == keyDonoCarro){
                        r.val();
                        carro = r.val();
                        carro.key = r.key
                        carro.donos.find((d)=> d.key == id).key = id;
                        carro.donos.find((d)=> d.key == id).nome = dono.nome;
                        this.carroService.editar(carro.key, carro).then((r)=>{
                          console.log("Carro atualizado!")
                          flag = true;
                        }).catch((r)=>{
                            console.log(r)
                        });
                    }
                });
                return flag
            })
          });
        return ref.update({nome: dono.nome, cidade: dono.cidade, idade: dono.idade});
    }

    public remover(id){
        return this.donosColletion.remove(id);
    }

}