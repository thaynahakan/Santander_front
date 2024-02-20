/*Faça um mecanismo de busca dentro de um array.
[1,2,3,4,5,6,7,8,9,10] 
Achei o número 7
 */
function contarVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++; 
        }
    }
    return contador;
   }
   const palavra = prompt("Digite uma palavra:");
   const quantidadeVogais = contarVogais(palavra);
   console.log(`A palavra '${palavra}' possui ${quantidadeVogais} vogais.`);