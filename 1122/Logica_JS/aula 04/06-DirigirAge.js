/* Verificação de Idade que é permitido dirigir (If e Ternário)
● Crie um programa que verifica a idade de uma pessoa e determina
se ela pode dirigir ou não. Se a pessoa tiver 18 anos ou mais,
ela pode dirigir; caso contrário, não pode.*/

let idade = Number(prompt("Digite sua idade:"))

let permitido = (idade >= 18) ? "Tem idade para dirigir" : "Não tem idade para dirigir"

console.log(`Você ${permitido}`)