//Importando readline
const readline = require('readline-sync');
//entrada - variaveis
let salario = readline.questionFloat("Digite o salario: ");
let abono = readline.questionFloat("Digite o abono: ");

// processamento (SOMANDO O VALOR DO SALARIO DIGITADO + ABONO)
let novoSalario = salario + abono;

// Saida (Retornando o valor do novo salario somando com abono)
console.log("Novo salario: " + novoSalario.toFixed(2));