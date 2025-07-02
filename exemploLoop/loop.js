const readline = require('readline-sync');

// BOMBAAAAA
// let bomba = readline.question("Não digite (s): "); 

// if (bomba === "s") {
//   for (let i = 10; i >= 0; i--) {
//     setTimeout(() => {
//       if (i === 2) {
//         console.log(`Contagem: ${i} — vai restar 6 das 7 vidas!`);
//       } else if (i > 0) {
//         console.log("Contagem: " + i);
//       } else {
//         console.log("💥 BOOM!");
//       }
//     }, (10 - i) * 1000); // espera 1 segundo por número
//   }
// } else {
//   console.log("Por não ser curioso, você se manteve vivo!");
// }


//WHILE
// let querContinuar = readline.question("Quer jogar pagando R$500,00? (s): ").toLowerCase();

// // Enquanto o jogador continuar pagando, o jogo roda
// while (querContinuar === "s") {
//   console.log("🎮 Você está jogando!");

//   // Pergunta se quer continuar pagando pra jogar de novo
//   querContinuar = readline.question("Quer continuar jogando pagando R$500,00? (s): ").toLowerCase();

//   if (querContinuar === "s") {
//     console.log("💸 Pagamento feito. Continuando o jogo...");
//   }else{
//     console.log("Game over")
//   }
// }

// console.log("👋 Você saiu do jogo!");


//DO...WHILE
let querContinuar;

do {
  // Simula que a pessoa está jogando
  console.log("🎮 Você está jogando!");

  // Pergunta se quer continuar jogando
  querContinuar = readline.question("Quer continuar jogando pagando R$500,00? (s para pagar / qualquer outra tecla para sair): ").toLowerCase();

  if (querContinuar === "s") {
    console.log("💸 Pagamento feito. Continuando o jogo...");
    querContinuar = "p"; // Sinaliza que a pessoa quer continuar
  }

} while (querContinuar === "p");

console.log("👋 Você saiu do jogo!");
