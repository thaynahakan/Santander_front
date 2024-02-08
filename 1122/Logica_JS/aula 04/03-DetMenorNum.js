/* - Determinação do Maior Número
● Escreva um programa que receba três números como entrada e
determina o maior deles. Imprima o número mais alto.*/

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let num3 = Number(prompt("Digite o terceiro número:"));

let largestNumber;

if (num1 >= num2 && num1 >= num3) {
    largestNumber = num1;
}else if (num2 >= num1 && num2 >= num3) {
    largestNumber = num2;
} else {
    largestNumber = num3;
}

console.log("The largest number is:" + largestNumber)

/* treinando operador ternario */

let bigname = (num1 >= num2 && num1 >= num3) ? num1 : ((num2 >= num1 && num2 >= num3)? num2 : num3); /* coloquei a segunda parte toda dentro de um array assim o código roda primeiro duas opções e dentro de uma delas, mais uma. */

console.log("The big name is:" + bigname)