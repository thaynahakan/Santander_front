/* Desafio 04
 Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro 
vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto 
interno) desses dois vetores usando a fórmula matemática do produto escalar. */

let vetor1 = [1, 2, 3];
let vetor2 = [4, 5, 6];

if (vetor1.length !== vetor2.length) {
    console.log("Os vetores devem ter o mesmo comprimento.");
} else {
    // Calculando o produto escalar
    let resultadoProdutoEscalar = vetor1.reduce(function(resultado, elemento, index) {
        return resultado + elemento * vetor2[index];
    }, 0);

    // Exibindo o resultado
    console.log("Produto Escalar:", resultadoProdutoEscalar);
}
