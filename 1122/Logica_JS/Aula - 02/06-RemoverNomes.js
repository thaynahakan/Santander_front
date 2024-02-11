/* Desafio 06 
Dado um array nomes, remova todos os nomes que contenham menos de 5 letras.
 const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"] */

 const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];
 const novalista = [];
 
 function cincoletras(nomes){
     for (const pessoa of nomes){
         if(pessoa.length >= 5){
             novalista.push(pessoa);
 
         }
     }
 }
 cincoletras(nomes);
 console.log(`A nova lista com pessoas é: ${novalista}`);
