/*Crie um objeto chamado aluno com as propriedades nome, nota1, e nota2. 
Calcule a média das notas. 
Verifique se a média é maior ou igual a 7 usando operadores de comparação.
 */

// Criar o objeto aluno
const aluno = {
    nome: 'Maria',
    nota1: 8,
    nota2: 6
};

// Calcular a média das notas
const media = (aluno.nota1 + aluno.nota2) / 2;

// Verificar se a média é maior ou igual a 7
const aprovado = media >= 7;

// Exibir os resultados
console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Nota 1: ${aluno.nota1}`);
console.log(`Nota 2: ${aluno.nota2}`);
console.log(`Média: ${media}`);
console.log(`Aprovado: ${aprovado}`);
