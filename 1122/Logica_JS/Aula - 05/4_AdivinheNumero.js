/* Desafio 4
- Adivinhe o Número
● Crie um programa que gere um número aleatório entre 1 e 100. Em
seguida, peça ao usuário para adivinhar o número. Use um loop
while para continuar pedindo ao usuário que adivinhe até que ele
acerte o número. Forneça dicas informando se o número é maior ou
menor. */

// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0; // Inicializa a variável para contar o número de tentativas do usuário

console.log("Bem-vindo ao jogo Adivinhe o Número!");

while (true) { // Loop principal, continuará até que o usuário acerte o número
    // Solicita ao usuário para digitar um palpite
    let palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));

    // Verifica se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
        continue; // Reinicia o loop se o palpite não for válido
    }

    tentativas++; // Incrementa o contador de tentativas

    if (palpite === numeroAleatorio) {
        // Parabeniza o usuário e informa o número de tentativas
        console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        break; // Sai do loop se o usuário acertar
    } else if (palpite < numeroAleatorio) {
        console.log("Tente novamente. O número é maior."); // Fornece dica se o palpite for menor
    } else {
        console.log("Tente novamente. O número é menor."); // Fornece dica se o palpite for maior
    }
}
