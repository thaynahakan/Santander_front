/*Desafio 03
Criar um dicionário de sinônimos usando Array e Objs
Exemplo: dicionarioDeSinonimos.feliz, deve retornar ["alegre", "contente", 
"satisfeito"]
dicionarioDeSinonimos.triste, retorna ["melancólico", "abatido", "deprimido"],
dicionarioDeSinonimos.bom, retorna ["ótimo", "excelente", "maravilhoso"],
 */

// Criar o dicionário de sinônimos usando um objeto
const dicionarioDeSinonimos = {
    feliz: ["alegre", "contente", "satisfeito"],
    triste: ["melancólico", "abatido", "deprimido"],
    bom: ["ótimo", "excelente", "maravilhoso"]
};

// Exemplos de uso
console.log("Sinônimos de 'feliz':", dicionarioDeSinonimos.feliz);
console.log("Sinônimos de 'triste':", dicionarioDeSinonimos.triste);
console.log("Sinônimos de 'bom':", dicionarioDeSinonimos.bom);
