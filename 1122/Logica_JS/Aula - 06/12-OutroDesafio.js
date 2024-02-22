/*Super Desafio ++
12 - Fazer um simulador de rolagem de dados, que receba como input N 
dados e N lados e quantidade de tentativas e mostre as rolagens 
individuais e a soma dos valores?
Entradas:
Quantidade de dados: 3
Quantidade de lados: 9
Quantidade de tentativas: 3 */

function simularRolagemDeDados(quantidadeDados, quantidadeLados, quantidadeTentativas) {
    for (let tentativa = 1; tentativa <= quantidadeTentativas; tentativa++) {
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

        // Exibe os resultados individuais e a soma para cada tentativa
        console.log(`Tentativa ${tentativa}:`);
        console.log(`  Resultados Individuais: ${resultados.join(', ')}`);
        console.log(`  Soma dos Valores: ${soma}\n`);
    }
}

// Exemplo de uso com 3 dados de 9 lados e 3 tentativas
const quantidadeDados = 3;
const quantidadeLados = 9;
const quantidadeTentativas = 3;
simularRolagemDeDados(quantidadeDados, quantidadeLados, quantidadeTentativas);
