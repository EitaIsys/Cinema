declare function require (msg:string) : any;
var readline = require('readline-sync');

import {Cliente} from "./Cliente";

export class Cinema{
    private cadeiras : Array<Cliente>;
    private lotacao : number;

    public constructor (lotacao : number){
        this.cadeiras = [];
        this.lotacao = lotacao;    
    }

    public getCadeiras() : Array<Cliente>{
        return this.cadeiras;
    }
    public setCadeira(cadeiras : Array<Cliente>): void{
        this.cadeiras = cadeiras;  
    }
    public getLotacao() : number{
        return this.lotacao;
    }
    public setLotacao(lotacao : number) : void{
        this.lotacao = lotacao;
    }
    public acharCliente(id : string) : number{
        for (let i : number = 0; i < this.lotacao ; i +=1 ){
            if( this.cadeiras[i] != undefined && this.cadeiras[i].getId() == id){
                return i;
            }
        }
        return -1;
    }
    public reservar(id : string, fone : string, ind : number) : boolean{
        if ( this.cadeiras[ind] != undefined){
            return false;
        }
        if (this.acharCliente(id) != -1){
            return false;
        }
        let nCliente : Cliente = new Cliente(id, fone);
        this.cadeiras[ind] = nCliente;
        return true;
    }
    public show() : string {
        let resposta : string = "[";
        for (let i : number = 0; i < this.lotacao ; i +=1 ){
            if( this.cadeiras[i] == undefined ){
                resposta += "- ";
            }else{
                resposta +=this.cadeiras[i].toString() +" ";
            }         
        }
        return resposta;
    }
    public cancelarReserva(id : string) : boolean {
        let lugar: number = this.acharCliente(id);
        if(lugar == (-1)){
            return false
        }else{
            this.cadeiras[lugar] = null;
            return true;
        }
    }
    
}
