/*Crie um objeto com valores numéricos e utilize um loop for-in para 
calcular e imprimir a soma desses valores.
{ valor1: 10, valor2: 20, valor3: 30, valor4: 40 }
 */

let valores = {valor1: 10, valor2: 20, valor3: 30, valor4: 40};

let soma = 0;

for (let chave in valores) {
    soma += valores[chave];
}

console.log(`A soma dos valores é: ${soma}`);