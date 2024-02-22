/*Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop 
for. 
Saída: N X 1 = 10 
*/

let numero = prompt(parseInt("Insira qual tabuada você deseja ver:"));

for(let i = 1; i <= 10; i++){
    conta = i * numero
    console.log(`${numero} X ${i} = ${conta}`)
}