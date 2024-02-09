/* Desafio 2
- Números Primos
● Crie um programa que peça ao usuário para inserir um número e
use um loop while para verificar se o número é primo ou não. Um
número primo é aquele que só é divisível por 1 e por ele mesmo.
Imprima se o número é primo ou não. */

function primo(numero) {
    if (numero <= 1){
        return false; // Números menores ou iguais a 1 não são primos
    }
    for (let i = 2; i < numero; i++){
        if (numero % i === 0){
            return false; //se for divisível por algum número entre 2 e o próprio número não é primo.
        }
    }

    return true; // se não for divisível por nenhum número é primo.
}


while (true){
    let numero = parseInt(prompt("Digite um numero primo:"));

    if (primo(numero)) {
        console.log(`O numero ${numero} é primo.`);
        break// Sai do loop se um número primo for digitado
    } else {
        console.log(`O numero do ${numero} não é primo. Tente novamente.`)
    }
}



