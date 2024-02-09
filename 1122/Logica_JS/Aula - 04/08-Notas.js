/* - Conversão de Notas em Conceitos
● Faça um programa que peça ao usuário para digitar uma letra e
verifique se é uma vogal ou uma consoante utilizando o comando
switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o
programa deve exibir a mensagem "É uma vogal". Se o usuário
digitar uma consoante, o programa deve exibir a mensagem "É uma
consoante".*/


let letra = prompt("Digite uma letra:").toLowerCase(); // Convertendo para minúsculas para facilitar a comparação

const vogais = ['a', 'e', 'i', 'o', 'u'];
/* Utilizei vogais.includes(letra) para verificar se a letra está na lista de vogais. */
switch (vogais.includes(letra)) {
    case true:
        console.log("É uma vogal");
        break;
    case false:
        console.log("É uma consoante");
        break;
    default:
        console.log("Por favor, digite uma letra válida.");
}
