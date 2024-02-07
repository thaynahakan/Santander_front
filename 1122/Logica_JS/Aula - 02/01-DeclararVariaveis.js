/* Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a 
soma, subtração, multiplicação e divisão desses números. Armazene os 
resultados em um array, sendo o
 Index: 0 = Soma
       1 = subtração
       2 = multiplicação
       3 = divisão
*/

// Declare duas variáveis com valores diferentes
let number1 = 8;
let number2 = 4;

// Realize as operações
const resultado = [
    number1 + number2,  // Soma
    number1 - number2,  // Subtração
    number1 * number2,  // Multiplicação
    number1 / number2   // Divisão
];

// Exiba os resultados
console.log("Soma: " + resultado[0]);
console.log("Subtração: " + resultado[1]);
console.log("Multiplicação: " + resultado[2]);
console.log("Divisão: " + resultado[3]);