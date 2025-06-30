//Importando readline
const readline = require('readline-sync');
//entrada - variaveis
let numero1 = readline.questionFloat("Digite o primeiro do número: ");
let numero2 = readline.questionFloat("Digite a segundo número: ");
let numero3 = readline.questionFloat("Digite a terceiro número: ");
let numero4 = readline.questionFloat("Digite a quarto número: ");

// processamento (calculando a diferenca)
let diferenca = (numero1 * numero2) - (numero3 * numero4);

// Saida (Retornando o valores digitados)
console.log("-------------------------")
console.log(`A diferenca do produto e: ${diferenca.toFixed(1)}`)
console.log("-------------------------")