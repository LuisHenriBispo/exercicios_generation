//3- Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
// via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
// e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.

const readline = require('readline-sync');

//Entrada - variaveis
let idade;
let menorDe21 = 0;
let maiorDe50 = 0;

while(true){
    idade = readline.questionInt(`Digite sua idade: `);

    // Verifica se o numero digitado foi negativo
    if(idade <0){ 
        break;// Para o loop
    }

    if(isNaN(idade)){
        console.log("Nenhum numero foi digitado, digite um numero inteiro, por favor!");
        i++;// Continua para o usuario digitar um numero
        continue;// Continua dps que ja digitou
    }

    // Fazendo contagem por idade
    if(idade < 21){
        menorDe21++;
    }else if(idade > 50){
        maiorDe50++;
    }
}

// Imprimindo
console.log("-------------------------")
console.log("----- resultado -----");
console.log(`Total de pessoas menores de 21 anos: ${menorDe21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiorDe50}`);
console.log("-------------------------");