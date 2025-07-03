import readline = require("readline-sync");

// Guardando os numero digitado (sem repetir)
const numerosDigitados: Set<number> = new Set<number>();

console.log("\nDigite 10 números inteiros não repetidos:");

while (numerosDigitados.size < 10) {
    const numero = readline.questionInt(`Digite o ${numerosDigitados.size + 1}º número: `);
    
    if(!numerosDigitados.has(numero)){
        numerosDigitados.add(numero);
    }else{
        break;
    }
}

// Convertendo para array e ordenando
const numerosOrdenados = Array.from(numerosDigitados).sort((a, b) => a - b);
// imprimindo
console.log("\nListar dados do Set:");
numerosOrdenados.forEach((numero) =>{
    console.log(numero);
})