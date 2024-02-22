/*Desafio 7
Ache a lógica: 1 1 2 3 5 8 13
Agora, sua tarefa é criar um programa que recebe um número inteiro N 
como entrada e retorna os primeiros N termos da sequência.
Exemplo: Entrada: 6 Saída: [1 , 1, 2, 3, 5, 8] 
Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, ..., 377] */
function fibonacci(n) {
    let fibSequence = [1, 1];

    while (fibSequence.length < n) {
        let nextTerm = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextTerm);
    }

    return fibSequence.slice(0, n);
}

// Exemplos de uso:
const entrada1 = 6;
const saida1 = fibonacci(entrada1);
console.log(`Entrada: ${entrada1} Saída: [${saida1}]`);

const entrada2 = 14;
const saida2 = fibonacci(entrada2);
console.log(`Entrada: ${entrada2} Saída: [${saida2}]`);