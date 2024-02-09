// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const limiteTentativas = 5; // Defina o número máximo de tentativas

let tentativas = 0; // Inicializa a variável para contar o número de tentativas do usuário

console.log("Bem-vindo ao jogo Adivinhe o Número!");

// Inicia um loop que continua até que o usuário acerte ou atinja o limite de tentativas
while (tentativas < limiteTentativas) {
    // Solicita ao usuário para digitar um palpite
    let palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));

    // Verifica se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
        continue; // Reinicia o loop se o palpite não for válido
    }

    tentativas++; // Incrementa o contador de tentativas

    // Verifica se o palpite é igual ao número aleatório
    if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        break; // Sai do loop se o usuário acertar
    } else if (palpite < numeroAleatorio) {
        console.log("Tente novamente. O número é maior."); // Fornece dica se o palpite for menor
    } else {
        console.log("Tente novamente. O número é menor."); // Fornece dica se o palpite for maior
    }
}

// Se o número de tentativas atingir o limite, informa ao usuário o número correto
if (tentativas === limiteTentativas) {
    console.log(`Você atingiu o limite de tentativas. O número correto era ${numeroAleatorio}.`);
}