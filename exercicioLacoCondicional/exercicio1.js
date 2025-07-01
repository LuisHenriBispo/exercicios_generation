// 1- Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela 
// se a soma de A + B é maior, menor ou igual a C.

const readline = require('readline-sync');

//entrada - variaveis
let a= readline.questionInt("Digite o numero de A: ");
let b= readline.questionInt("Digite o numero de B: ");
let c= readline.questionInt("Digite o numero de C: ");
let soma;

// Calculando valor de A e B
soma = a + b;

//Laco para comparar a soma com C
if(soma > c){
    console.log(`${a} + ${b} = ${soma} > ${c}`);
    console.log("A soma de A + B é maior do que C.");
}else if(soma < c){
    console.log(`${a} + ${b} = ${soma} < ${c}`);
    console.log("A soma de A + B é menor do que C.");
}else{
    console.log(`${a} + ${b} = ${soma} = ${c}`);
    console.log("A soma de A + B é igual a C.");
}