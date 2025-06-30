//Importando readline
const readline = require('readline-sync');
//entrada - variaveis
let nomeFuncionario = readline.question("Digite seu nome: ")
let salarioBruto = readline.questionFloat("Digite o salario bruto: R$");
let adicionalNoturno = readline.questionFloat("Digite o adicional noturno: R$");
let horasExtra = readline.questionFloat("Digite o valor das horas extras: R$");
let desconto = readline.questionFloat("Digite o valor dos descontos: R$");

// processamento
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtra * 5) - desconto;

// Saida (Retornando o valores digitados)
console.log("-------------------------")
console.log(`Nome do(a) Funcionario(a): ${nomeFuncionario}`)
console.log(`Salario Liquido: R$${salarioLiquido.toFixed(2)}`)
console.log("-------------------------")