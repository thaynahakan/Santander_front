const patos = [
    'Patorango', 'Patolango',
    'Pato lhaço', 'Patoringa',
    'Patosencss', 'Patodoc',
    'Patman', 'Patodin',
    'SherlockPato', 'Patowhile'
  ];
  
  let sorteado = Math.floor(Math.random() * patos.length); // Índice aleatório do array
  let contador = 0;
  let pato;
  
  do {
    console.log(patos[sorteado]);
    pato = prompt('Digite o pato competidor: ', patos[sorteado]);
  
    if (patos[sorteado] === pato) {
      alert('Você acertou, é o ' + patos[sorteado]);
      break; // Encerra o loop se o pato for encontrado
    } else {
      alert('Tente novamente');
      contador++;
    }
  } while (contador < 3); // Limita o número de tentativas a 3
  
  if (contador === 3) {
    alert('Você atingiu o limite de tentativas. O pato correto era: ' + patos[sorteado]);
  }
  