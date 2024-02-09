/* Soma de Números Pares
● Desenvolva um programa que peça ao usuário para inserir números
inteiros. Use um loop while para calcular a soma dos números
pares inseridos pelo usuário. Pare a entrada quando o usuário
inserir 0 e exiba a soma total. */

let somaPares = 0;

while (true) {
    let numero = parseInt(prompt("Digite um número inteiro (0 para parar):"));

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        continue; // Volta ao início do loop se o usuário não inserir um número válido
    }

    if (numero === 0) {
        break; // Sai do loop se o usuário inserir 0
    }

    if (numero % 2 === 0) {
        somaPares += numero; // Adiciona o número à soma se for par
    }
}

console.log(`A soma dos números pares inseridos é: ${somaPares}`);
