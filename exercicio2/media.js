//Importando readline
const readline = require('readline-sync');
//entrada - variaveis
let nomeAluno = readline.question("Digite seu nome: ")
let nota1 = readline.questionFloat("Digite a primeira nota: ");
let nota2 = readline.questionFloat("Digite a segunda nota: ");
let nota3 = readline.questionFloat("Digite a terceira nota: ");
let nota4 = readline.questionFloat("Digite a quarta nota: ");

// processamento (Divindo as notas para se ter a média)
let mediaNota = (nota1 + nota2 + nota3 + nota4) /4;

// Saida (Retornando o valores digitados)
console.log("-------------------------")
console.log(`Nome do alunno: ${nomeAluno}`)
console.log(`Média final: ${mediaNota.toFixed(1)}`)
console.log("-------------------------")