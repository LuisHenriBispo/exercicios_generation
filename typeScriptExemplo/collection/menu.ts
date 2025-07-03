import ler = require("readline-sync");
const list: Array<number> = new Array<number>(12, 75);
let opcao: number = 0;

opcao = ler.questionInt("Digite 1 para cadastrar");

switch(opcao){

    case 1:
        console.log("coloque um numero: ");
        list.push(ler.questionInt());
    break;

     case 2:
        list.pop();
    break;
    case 3:
        console.table(list);
    break;
}
