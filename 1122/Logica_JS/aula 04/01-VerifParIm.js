/*- Verificação de Números Pares e Ímpares (If e Ternário)
● Escreva um programa que recebe um número como entrada e verifica
se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
ímpar. */

let numb1 = Number(prompt("Digite um número:"));

let resultado = numb1 % 2 === 0 ? "par" : "impar";
console.log(resultado);