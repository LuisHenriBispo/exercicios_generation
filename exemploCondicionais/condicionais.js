// if simples
// let idade = 18;
//let idade = 20;


// if simples // if mais else //if else if
//if(idade >= 18){
//    console.log("Voce e maior de idade");
//}else{
//    console.log("Voce e menor de idade!")
//}

//let nota = 75;

// if(nota >= 90){
//     console.log("cONCEITO A");
// }else if(nota >= 80){
//     console.log("cONCEITO B");
// }else if(nota >= 70){
//     console.log("cONCEITO C");
// }else{
//     console.log("cONCEITO D");
// }

//OPERADORES LOGICOS 
// const readline = require("readline-sync");

// let idade = readline.questionInt('Digite sua idade: ');

// if(idade < 5){
//     console.log("Entrada gratuita");
// }else if(idade >= 5 && idade <= 12){
//     console.log("Meia Entrada");
// }else if(idade >= 13 && idade <= 59){
//     console.log("Ingresso inteiro");
// }else{
//     console.log("Meia entrada para idosos");
// }

// Switch case

const readline = require("readline-sync");
console.log("------------- menu -------------")
console.log("------------- opcao 1 - cor fria -------------")
console.log("------------- opcao 2 - cor quente -------------")

let opcao = readline.questionInt('Digite sa opcao: ');
switch(opcao){
    case 1:
        console.log("Cor fria");
        break;
    case 2:
        console.log("Cor quente");
        break;
        default:
            console.log("opcao invalida")
}



