/*  Verificação de Triângulo
● Crie um programa que recebe três comprimentos de lados de um
triângulo como entrada e determina se eles formam um triângulo
equilátero (Todos os lados são iguais), isósceles (Dois lados
são iguais) ou escaleno (Se nada é igual). Imprima a
classificação do triângulo.*/

let sizeA = parseFloat(prompt("Qual valor do lado A?"));
let sizeB = parseFloat(prompt("Qual valor do lado A?"));
let sizeC = parseFloat(prompt("Qual valor do lado A?"));

let triangulo;
    if (sizeA === sizeB && sizeA === sizeC) {
        triangulo = "Equilatero" } else if (sizeB == sizeA || sizeA === sizeC || sizeB === sizeC) {
    triangulo = "Isóceles" 
} else {
    triangulo = "Escaleno"
}

console.log(`O triângulo é ${triangulo}`)