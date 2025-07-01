const readline = require('readline-sync');

//entrada - variaveis
let codProduto = readline.questionInt("Digite o codigo do produto (1 a 6): ");
let qntd = readline.questionInt("Digite a quantidade comprada: ");
let nomeProduto;
let preco;
let valorTotal;

switch(codProduto){
    case 1:
        nomeProduto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        nomeProduto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        nomeProduto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        nomeProduto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        nomeProduto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        nomeProduto = "Suco de Laranja";
        preco = 13.00;
        break;
    default:
        console.log("Codigo invalido!");    
}

valorTotal = qntd * preco;

//imprimindo no console
console.log("----- Detalhes da Compra -----");
console.log("Produto: " + nomeProduto);
console.log("Valor total: R$ " + valorTotal.toFixed(2));