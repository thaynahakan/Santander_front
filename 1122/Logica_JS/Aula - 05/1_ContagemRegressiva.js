/* - Contagem Regressiva
● Escreva um programa que use um loop while para contar de 10 até
1 e imprima cada número na tela, em ordem decrescente. */

console.log('Contagem Regressiva:');

let contador = 10;

do {
    console.log(contador)
    contador -= 1;
} while (contador > 0);

/* 
feito apenas com while

console.log('Contagem Regressiva:');

let contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador -= 1;
} */