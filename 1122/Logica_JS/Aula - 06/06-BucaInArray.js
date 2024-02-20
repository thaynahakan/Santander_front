/*Faça um mecanismo de busca dentro de um array.
[1,2,3,4,5,6,7,8,9,10] 
Achei o número 7
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Solicitar ao usuário o número que deseja procurar
let numeroProcurado = parseInt(prompt("Digite o número que deseja procurar:"));
let encontrou = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === numeroProcurado) {
        console.log(`Achei o número ${numeroProcurado} na posição ${i}`);
        encontrou = true;
        break; // Interrompe o loop assim que o número for encontrado
    }
}

if (!encontrou) {
    console.log(`Não encontrei o número ${numeroProcurado} no array.`);
}