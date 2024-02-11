// 1. Adicione itens à lista de compras com a quantidade desejada
const listaDeCompras = new Map();
listaDeCompras.set('Maçã', 5);
listaDeCompras.set('Banana', 3);
listaDeCompras.set('Leite', 4);
listaDeCompras.set('Pão', 10);

// 2. Verifique se um item específico está na lista de compras
const itemEspecifico = 'Banana';
if (listaDeCompras.has(itemEspecifico)) {
    console.log(`${itemEspecifico} está na lista de compras.`);
} else {
    console.log(`${itemEspecifico} não está na lista de compras.`);
}

// 3. Verifique a quantidade de um item específico da lista
const quantidadeItemEspecifico = listaDeCompras.get(itemEspecifico);
console.log(`A quantidade de ${itemEspecifico} na lista é ${quantidadeItemEspecifico}.`);

// 4. Modifique a quantidade de um item específico da lista
const novoQuantidade = 6;
listaDeCompras.set(itemEspecifico, novoQuantidade);
console.log(`A quantidade de ${itemEspecifico} foi modificada para ${novoQuantidade}.`);

// 5. Remova um item específico da lista
listaDeCompras.delete('Leite');
console.log('O item "Leite" foi removido da lista de compras.');

// Imprima a lista de compras atualizada
console.log('Lista de Compras Atualizada:');
for (const [item, quantidade] of listaDeCompras) {
    console.log(`${item} - ${quantidade}`);
}
