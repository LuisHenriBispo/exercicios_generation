import ler = require("readline-sync");
import {Queue} from "./queueMetodos";

const fila = new Queue<string>();
let opcao : number;

do{
    console.log("\n-------------Fila de atendimento-------------");
    console.log("1 - Adiconar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente");
    console.log("0 - Sair");
    opcao = ler.questionInt("Opcao escolhida: ");

    //Opcoes
    switch(opcao){ //Adiciona
        case 1:
            const nome = (ler.question("Digite seu nome: "));
            fila.enqueue(nome);
            console.log(`${nome} foi adicionado(a) com sucesso!`);
            break;

        case 2: //Lista
            fila.printQueue();// mostra toda a lista
            break;

        case 3: //Chama para consulta e tira o nome da lista
            if (!fila.isEmpty()) {
            const nome = fila.dequeue();
            console.log(`${nome} foi chamado(a) da fila.`);
        } else {
            console.log("A fila está vazia. Nenhum cliente para chamar.");
        }
            break;

        case 0: //Usuario sai
            console.log("Finalizando...");
            console.log("Programa Finalidado. Voce saiu do programa."); 
            break;

        default: 
            console.log("Opcao invalida. Tente novamente.");
            break;
    }

}while(opcao != 0);