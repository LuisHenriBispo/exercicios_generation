// Funcao que retorna um valor

export function somar(numero1: number, numero2 : number): number{
    return numero1 + numero2;
}
export function somar2(numero1: number, numero2: number): void {
    const resultado = somar(numero1, numero2); // Usa a função somar corretamente
    console.log(`O resultado da soma é: ${resultado}`);
}

export function mostrarIdadeOuNome(valor: number | string): void {
  if (typeof valor === "number") {
    console.log(`Idade: ${valor} anos`);
  } else {
    console.log(`Nome: ${valor}`);
  }
}

export function dobrarOuSomar(valor: number, adicional?: number): number {
  if (adicional !== undefined) {
    return valor + adicional;
  } else {
    return valor * 2;
  }
}