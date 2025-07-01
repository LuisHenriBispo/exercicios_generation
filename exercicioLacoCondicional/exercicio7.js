const readline = require('readline-sync');

//entrada - variaveis
let numero1 = readline.questionFloat("Digite o primeiro numero: ");
let numero2 = readline.questionFloat("Digite o segundo numero: ");
let opcao = readline.questionInt("Digite a opção desejada (1- Soma, 2- Subtração, 3- Multiplicação, 4- Divisão): ");
let resultado;

// opcoes
switch(opcao){
    case 1: 
        resultado = numero1 + numero2;
        console.log(`Resultado: ${numero1} + ${numero2} = ${resultado}`);
        break;
    case 2: 
        resultado = numero1 - numero2;
        console.log(`Resultado: ${numero1} - ${numero2} = ${resultado}`);
        break;
    case 3: 
        resultado = numero1 * numero2;
        console.log(`Resultado: ${numero1} * ${numero2} = ${resultado}`);
        break;
    case 4: 
        if(numero2 !== 0){
            resultado = numero1 / numero2;
            console.log(`Resultado: ${numero1} / ${numero2} = ${resultado}`);
        }else{
            console.log("Erro de divisão: numero sendo divido por zero!")
            break;
        
        }default:
            console.log("opção invalida!");
            break;
}
