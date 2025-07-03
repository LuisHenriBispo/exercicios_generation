/* 1- Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las 
individualmente no Array. 
--------------------------------------------------
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

import readline = require("readline-sync");

// Array vazio para guardar as cores
const coresArray: Array<String> = [];

console.log("Digite 5 cores: ");

// Pedindo para o usuario digitar 5 cores
for (let i = 0; i < 5; i++) {
    const cor = readline.question(`Digite a ${i + 1}ª cor: `);
    coresArray.push(cor);
}

//Imprimindo
console.log("\nListar todas as cores: ");
console.log(coresArray);

// Imprimindo cores em ordem (alfabética)
const coresOrdenadas = [...coresArray].sort();
console.log("\nCores em ordem alfabética:");
console.log(coresOrdenadas);