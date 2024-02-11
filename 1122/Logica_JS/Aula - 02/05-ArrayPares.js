/* Desafio 05 
Dado um array numeros, crie um novo array que contenha apenas os números pares 
do array original.
 const numeros = [3, 8, 15, 21, 30, 37, 42]; */

 const numeros = [3, 8, 15, 21, 30, 37, 42];
 let numerosPares = [];

 for (let i = 0; i <numeros.length; i++) {
    if ( numeros[i] % 2 === 0 ){
        numerosPares.push(numeros[i]);
    }
 };

 console.log("Numeros Pares", numerosPares);