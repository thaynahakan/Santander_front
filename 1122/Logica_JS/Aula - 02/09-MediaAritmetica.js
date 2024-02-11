/*  Dado um array notas, calcule a média aritmética das notas, mas ignore a nota 
mais baixa e a nota mais alta do conjunto.
 const notas = [8, 9, 7, 5, 10, 6] */

 // Array de notas
const notas = [8, 9, 7, 5, 10, 6];

// Encontrar a nota mais baixa e mais alta
const notaMaisBaixa = Math.min(...notas); // Usando spread operator (...) para desestruturar o array e encontrar o valor mínimo
const notaMaisAlta = Math.max(...notas); // Usando spread operator para desestruturar o array e encontrar o valor máximo

// Encontrar os índices das notas mais baixa e mais alta
const indiceNotaMaisBaixa = notas.indexOf(notaMaisBaixa); // Encontrar o índice da nota mais baixa no array
const indiceNotaMaisAlta = notas.indexOf(notaMaisAlta); // Encontrar o índice da nota mais alta no array

// Remover as notas mais baixa e mais alta do array
notas.splice(indiceNotaMaisBaixa, 1); // Remover a nota mais baixa usando o índice encontrado
notas.splice(indiceNotaMaisAlta < indiceNotaMaisBaixa ? indiceNotaMaisAlta : indiceNotaMaisAlta - 1, 1); // Remover a nota mais alta usando o índice encontrado, ajustando para o caso em que a nota mais alta está antes da nota mais baixa

// Calcular a média das notas restantes
const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length; // Calcular a média das notas restantes somando todas e dividindo pelo número de elementos

// Imprimir o resultado
console.log(`A média das notas, desconsiderando a mais baixa e a mais alta, é: ${media}`);
