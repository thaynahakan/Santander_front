/*Super Desafio
10 - Fazer um simulador de rolagem de dados, que receba como input N 
dados de 6 lados e mostre as rolagens individuais e a soma dos 
valores
Entradas:
Quantidade de dados: 2

 */

function simularRolagemDeDados(quantidadeDados) {
    let resultados = [];
    let soma = 0;

    for (let i = 0; i < quantidadeDados; i++) {
        // Simula a rolagem de um dado de 6 lados
        let resultadoDado = Math.floor(Math.random() * 6) + 1;

        // Armazena o resultado individual
        resultados.push(resultadoDado);

        // Adiciona ao valor total da soma
        soma += resultadoDado;
    }

    // Exibe os resultados individuais e a soma
    console.log(`Resultados Individuais: ${resultados.join(', ')}`);
    console.log(`Soma dos Valores: ${soma}`);
}

// Exemplo de uso com 2 dados
const quantidadeDados = 2;
simularRolagemDeDados(quantidadeDados);
