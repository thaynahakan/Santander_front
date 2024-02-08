/* Verificação de Ano Bissexto
● Desenvolva um programa que receba um ano como entrada e verifica
se ele é bissexto ou não. Um ano bissexto é aquele que é
divisível por 4, exceto por anos que são divisíveis por 100, a
menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou
"Não é um ano bissexto" com base na entrada. (2000, 1996) */

let year = parseInt(prompt("Digite um ano:"))

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " é um ano bissexto");
} else {
    console.log(year + " não é um ano bissexto");
}