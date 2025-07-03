import ler = require("readline-sync");
const list: Array<number> = new Array<number>(12, 75);

console.log("Adicione um numero a lista: ");
//let numero = ler.questionInt();
list.push(ler.questionInt());

console.log(list);
console.table(list);

list.pop();
console.table(list);

list.reverse();
console.table(list);

list.forEach(num => console.log(num));