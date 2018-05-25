import { Dono } from "./dono";

export class Carro{
    key: string;
    modelo: string;
    donos: Array<Dono> = new Array<Dono>();
}