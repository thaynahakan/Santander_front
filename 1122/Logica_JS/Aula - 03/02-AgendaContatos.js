/*Desafio 02
Crie uma agenda de contatos que armazene vários contatos em um array, 
modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar 
Map)
 */
// Defina a agenda de contatos como um array
const agendaDeContatos = [];

// Função para adicionar um contato à agenda
function adicionarContato(nome, telefone, email) {
    const novoContato = {
        Nome: nome,
        Telefone: telefone,
        Email: email
    };
    agendaDeContatos.push(novoContato);
}

// Adicione alguns contatos à agenda
adicionarContato('João', '123-456-7890', 'joao@email.com');
adicionarContato('Maria', '987-654-3210', 'maria@email.com');
adicionarContato('Carlos', '555-123-4567', 'carlos@email.com');

// Função para imprimir a lista de contatos
function imprimirContatos() {
    console.log('Lista de Contatos:');
    agendaDeContatos.forEach(contato => {
        console.log(`Nome: ${contato.Nome}, Telefone: ${contato.Telefone}, Email: ${contato.Email}`);
    });
}

// Imprima a lista de contatos
imprimirContatos();
