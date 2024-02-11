/* Desafio 03
 Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz 
2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a 
determinante dessa matriz usando a fórmula matemática de determinante.
*/

// Criar uma matriz 2x2
let matriz = [
    [2, 5],
    [3, 7]
    // Substitua estes valores pelos valores reais da matriz
];

// Extrair elementos da matriz
let a = matriz[0][0];
let b = matriz[0][1];
let c = matriz[1][0];
let d = matriz[1][1];

// Calcular a determinante
let determinante = (a * d) - (b * c);

// Exibir a matriz e a determinante
console.log("Matriz:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
}

console.log("Determinante: " + determinante);