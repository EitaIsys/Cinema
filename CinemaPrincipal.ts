declare function require (msg:string) : any;
var readline = require('readline-sync');

import {Cinema} from "./Cinema";
import {Cliente} from "./Cliente";

let cine : Cinema = new Cinema(0);


while(true){
    let comandosPossiveis : string = ""+
    "1 - iniciar nova sala de cinema \n" +
    "2 - quantos acentos disponíveis \n" +
    "3 - reservar cadeira \n" +
    "4 - cancelar reserva \n" +
    "ok - sair do programa"

    let comando : Array<string> = readline.question ("Digite um comando: ").split(" ");

    if(comando[0] == "ok"){
        console.log("Até a próxima!");
        break;
    }
    switch(comando[0]){
        case "1" : 
             cine = new Cinema( parseInt(comando[1]) );
             break;
        
        case "2" :
            console.log(cine.show());
            break;
        
        case "3" :
            if( cine.reservar(comando[1], comando[2], parseInt(comando[3])) == true){
                console.log("Reserva efetuada.");
            }else{
                console.log("Não é possivel reservar esta cadeira.");
            }
            break;
        case "4" :
            if(cine.cancelarReserva(comando[1]) == true){
                console.log("Reserva cancelada");
            }else{
                console.log("Não foi possivel fazer o cancelamento.")
            }
            break;
    }


}
