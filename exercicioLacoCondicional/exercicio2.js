// 2- Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar 
// e se o número é positivo ou negativo. 

const readline = require('readline-sync');

//entrada - variaveis
const numero = readline.questionInt("Digite um numero: ");
let imparOuPar;
let numeroPositivoOuNegativo;

// calculo para ver se o numero e impar ou par
if(numero % 2 === 0){
    imparOuPar = "par";
}else{
    imparOuPar = "impar";
}

// verifica se o numero e negativo ou positivo
if(numero > 0){
    numeroPositivoOuNegativo = "positivo";
}else if(numero < 0){
    numeroPositivoOuNegativo = "negativo";
}else{
    numeroPositivoOuNegativo = "zero";
}

// mensagem
console.log(`O numero ${numero} é ${imparOuPar} e ${numeroPositivoOuNegativo}!`)