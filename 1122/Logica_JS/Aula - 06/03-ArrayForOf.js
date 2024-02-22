/*Crie um array com pelo menos 5 nomes de frutas.
Utilize um loop for-of para imprimir no console cada nome de fruta.
 */

let frutas = [ 'Banana', 'Limão', 'Maçã', 'Pêssego', 'Melancia'];

for(let fruta of frutas){
    console.log(`Nome: ${fruta}`)
}

//Não funciona se colocar sendo um objeto {}, tem que ser um array [] pra desempacotar.