import ler = require("readline-sync");
import {Queue} from "./queueMetodos";
import { Stack } from "./stackMetodos";

const fila = new Queue<string>();
let continua: string = ` `;

do{
    console.log("-------------Fila de atendimento-------------");
    console.log("Digite 1 para cadastrar");
    console.log("Digite 2 para finalizar atendimento");
    console.log("Digite 3 para ver a lista dos pacientes");
    let opcao = ler.questionInt(" -> ");

    switch(opcao){
    case 1:
        fila.enqueue(ler.question("Nome: "));
        break;
    case 2:
        fila.dequeue();
        break;
    case 3:
        fila.printQueue();// mostra toda a lista
        break;
    default: 
}

continua = ler.question("Digite 's' para continuar")

}while(continua === "s");
