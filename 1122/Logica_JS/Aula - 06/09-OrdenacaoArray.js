/*Desafio 9
Criar um algoritmo de ordenação de arrays;
novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9]
09.01 - Método que faz isso (Achar o método que ordena os arrays)
 */
let novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// Função de comparação para ordenação numérica
function compararNumeros(a, b) {
    return a - b;
}

// Ordenando o array numericamente
novoArray.sort(compararNumeros);

console.log(novoArray);
