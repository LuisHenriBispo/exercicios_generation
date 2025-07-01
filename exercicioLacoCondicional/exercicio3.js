const readline = require('readline-sync');

//entrada - variaveis
let nome= readline.question("Digite seu nome: ")
let idade= readline.questionInt("Digite sua idade: ");
const primeiraDoacao = readline.keyInYNStrict("Primeira vez doando sangue? (s/n)");

let aptoParaDoar = false;

if(idade >= 18 && idade <= 69){
    if(idade >= 60 && idade <= 69){
        if(!primeiraDoacao){
        aptoParaDoar = true;
    }
    }else{ // se a pessoa tive entre 18 e 59
        aptoParaDoar = true;
    }
}

if(aptoParaDoar){
    console.log(`${nome} esta apto para doar sangue!`)
}else{
    console.log(`${nome} nao esta apto para doar sangue!`)
}
    