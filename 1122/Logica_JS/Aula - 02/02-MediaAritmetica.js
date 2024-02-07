/* Desafio 02
 Crie um vetor (array) chamado notas com as notas de um aluno em três 
disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática 
da média aritmética */

// Criar um vetor (array) chamado notas com as notas do aluno
var notas = [8.5, 9.0, 7.5]; // Substitua esses valores pelas notas reais do aluno

// Calcular a média aritmética
var soma = 0;

for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
}

var media = soma / notas.length;

// Exibir a média
console.log("Notas: " + notas.join(", "));
console.log("Média: " + media.toFixed(2)); // Exibe a média com duas casas decimais