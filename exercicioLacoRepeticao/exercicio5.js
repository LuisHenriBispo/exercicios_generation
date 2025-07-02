//5- Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
// Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

const readline = require('readline-sync');

//Entrada - variaveis
let numero;
let soma = 0;

do{
    numero = readline.questionInt(`Digite um numero: `);

    if(isNaN(numero)){
        console.log("Nenhum numero foi digitado, digite um numero inteiro, por favor!");
        i++;// Continua para o usuario digitar um numero
        continue;// Continua dps que ja digitou
    }

    // Somando os numero positivos
    if(numero > 0){ 
        soma += numero;
    }

}while(numero !== 0);

// Imprimindo
console.log("-------------------------")
console.log("----- resultado -----");
console.log(`A soma dos números positivos é: ${soma}`);
console.log("-------------------------");