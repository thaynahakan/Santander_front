/*Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores 
são seus preços. 
Verifique se a maçã é mais cara que a banana
Verifique se a pêra não custa o mesmo que a uva. */

// Criar o Map frutas
const frutas = new Map();

// Adicionar frutas e seus preços ao Map
frutas.set('maçã', 2.5);
frutas.set('banana', 1.8);
frutas.set('pêra', 3.0);
frutas.set('uva', 2.7);

// Verificar se a maçã é mais cara que a banana
const macaMaisCaraQueBanana = frutas.get('maçã') > frutas.get('banana');
console.log("A maçã é mais cara que a banana:", macaMaisCaraQueBanana);

// Verificar se a pêra não custa o mesmo que a uva
const peraNaoCustaMesmoQueUva = frutas.get('pêra') !== frutas.get('uva');
console.log("A pêra não custa o mesmo que a uva:", peraNaoCustaMesmoQueUva);
