/* - Verificação de Números Pares e Ímpares
● Escreva um programa que recebe um número como entrada e verifica
se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
ímpar. (Usar switch Case) */

let ImPar = parseInt(prompt("Par ou ímpar??"))
console.log("Uma, duas, três meia e já!")

switch (ImPar % 2 === 0) {
    case true:
        console.log(ImPar + "É par!")
        break
    case false:
        console.log(ImPar + "É ímpar")
        break
    default:
        console.log("Por favor, insira um número válido")
        break
}