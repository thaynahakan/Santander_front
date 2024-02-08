/* Determinação de Estação do Ano
● Escreva um programa que recebe o nome de um mês como entrada e
utiliza um switch case para determinar a estação do ano
correspondente. Use a seguinte correspondência de meses:
- Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio:
"Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro,
Novembro: "Outono" */

let mes = prompt("Digite o nome de um mês:").toLowerCase(); // Convertendo para minúsculas para facilitar a comparação

let estacao;

switch (mes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        estacao = "Inverno";
        break;
    case "março":
    case "abril":
    case "maio":
        estacao = "Primavera";
        break;
    case "junho":
    case "julho":
    case "agosto":
        estacao = "Verão";
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        estacao = "Outono";
        break;
    default:
        console.log("Por favor, digite um mês válido.");
}

if (estacao) {
    console.log("A estação do ano para " + mes + " é " + estacao + ".");
}
