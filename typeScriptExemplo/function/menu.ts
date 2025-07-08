import { Http2ServerRequest } from "node:http2";
import{somar, somar2, mostrarIdadeOuNome, dobrarOuSomar} from "./exemploFunction";
import ler = require("readline-sync");

function main(){
    const numero1 = ler.questionInt("Digite o primeiro número: ");
    const numero2 = ler.questionInt("Digite o segundo número: ");
    console.log(`Resultado da soma é: ${somar(numero1, numero2)}`);

    // let resul = somar(numero1, numero2);
    // let resul2 = somar2(numero1, numero2);

    // let mult = resul *2;
    // console.log(`Multiplicacao da soma é: ${mult}`);
    //let mult2 = resul2 *2;
    //mostrarIdadeOuNome(12);
    console.log(dobrarOuSomar(12));
    //console.log(`Resultado da soma e: ${somar (ler.questionInt("Digite o primeiro numero: "),ler.questionInt)} `);
}


main();