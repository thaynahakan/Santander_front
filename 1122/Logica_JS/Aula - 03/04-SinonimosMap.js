/*
Criar um dicionário de sinônimos usando Map 
Exemplo: dicionarioDeSinonimos.get(Feliz) , deve retornar ["alegre", 
"contente", "satisfeito"]
dicionarioDeSinonimos.get(triste), retorna ["melancólico", "abatido", 
"deprimido"],
dicionarioDeSinonimos.get(bom), retorna ["ótimo", "excelente", "maravilhoso"] */

// Criar o dicionário de sinônimos usando Map
const dicionarioDeSinonimos = new Map();

// Adicionar palavras e seus sinônimos ao Map
dicionarioDeSinonimos.set('feliz', ["alegre", "contente", "satisfeito"]);
dicionarioDeSinonimos.set('triste', ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos.set('bom', ["ótimo", "excelente", "maravilhoso"]);

// Exemplos de uso
console.log("Sinônimos de 'feliz':", dicionarioDeSinonimos.get('feliz'));
console.log("Sinônimos de 'triste':", dicionarioDeSinonimos.get('triste'));
console.log("Sinônimos de 'bom':", dicionarioDeSinonimos.get('bom'));
