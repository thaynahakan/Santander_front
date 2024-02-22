/*Super Desafio +
11 - Fazer um simulador de rolagem de dados, que receba como input N 
dados e N lados e mostre as rolagens individuais e a soma dos 
valores?
Entradas:
Quantidade de dados: 2
Quantidade de lados: 9
 */

function simularRolagemDeDados(quantidadeDados, quantidadeLados) {
    let resultados = [];
    let soma = 0;

    for (let i = 0; i < quantidadeDados; i++) {
        // Simula a rolagem de um dado com a quantidade de lados especificada
        let resultadoDado = Math.floor(Math.random() * quantidadeLados) + 1;

        // Armazena o resultado individual
        resultados.push(resultadoDado);

        // Adiciona ao valor total da soma
        soma += resultadoDado;
    }

    // Exibe os resultados individuais e a soma
    console.log(`Resultados Individuais: ${resultados.join(', ')}`);
    console.log(`Soma dos Valores: ${soma}`);
}

// Exemplo de uso com 2 dados de 9 lados
const quantidadeDados = 2;
const quantidadeLados = 9;
simularRolagemDeDados(quantidadeDados, quantidadeLados);
