/* Desafio 07
 Dado um array idades, encontre o índice do primeiro elemento que seja maior ou 
igual a 18.
 const idades = [15, 22, 17, 20, 30, 12] */

const idades = [15, 22, 17, 20, 30, 12];
const indice = -1;


for(let i = 0 ; i < idades.length ; i++){
    if (idades[i] >= 18) {
        indice = i;
        break;
    }}
console.log(`O índice está na posição ${indice}`)