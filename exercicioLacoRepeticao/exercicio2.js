//2- Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela 
//quantos números são pares e quantos número são ímpares.

const readline = require('readline-sync');

//Entrada - variaveis
let numeroImpar = 0;
let numeroPar = 0;

for(let i = 1; i <= 10; i++){
    let numeroDigitado = readline.questionInt(`Digite o ${i}º número:`);

    // Verifica se o numero e negativo ou positivo
    if(numeroDigitado % 2 === 0){
        numeroPar++; //Conta os numeros pares
    }else{
        numeroImpar++; //Conta os numeros impares
    }

    if(isNaN(numeroDigitado)){
        console.log("Nenhum numero foi digitado, digite um numero inteiro, por favor!");
        i++;// Continua para o usuario digitar um numero
        continue;// Continua dps que ja digitou
    }
}

// Imprimindo
console.log("-------------------------")
console.log("----- resultado -----");
console.log(`Total de numeros pares: ${numeroPar}`);
console.log(`Total de numeros impares: ${numeroImpar}`);
console.log("-------------------------");
