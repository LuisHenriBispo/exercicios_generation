import ler = require("readline-sync");
import {Stack} from "./stackMetodos";

const pilha = new Stack<string>();
let opcao : number;

do{
    console.log("\n-------------Pilha de Livros-------------");
    console.log("1 - Adiconar Livros na Pilha");
    console.log("2 - Listar todos os Pilha");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    opcao = ler.questionInt("Opcao escolhida: ");

    switch(opcao){
        case 1:
            const livro = (ler.question("Digite o nome do livro: "));
            pilha.push(livro);
            console.log(`${livro} foi adicionado(a) com sucesso!`);
            break;
        case 2: //Lista
            pilha.printStack();// mostra toda a lista
            break; 
        case 3: //Lista
            //pilha.pop();// mostra toda a lista
            if (!pilha.isEmpty()) {
                const livro = pilha.pop();
                console.log(`${livro} foi retirado da pilha.`);
            } else{
                console.log("A pilha está vazia.");
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