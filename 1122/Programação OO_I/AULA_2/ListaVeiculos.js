/*Preciso de uma lista de veículos que tenham:
- Marca, Modelo, Ano, Preço

Entre os veículos que tenho na minha agência:
- Carros, motos, caminhões */

class Veiculo {
 constructor(marca,modelo,ano,preço) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.preço = preço;
    }
}

class Carros extends Veiculo{
    constructor(marca,modelo,ano,preço,tipo){
        this.tipo = tipo;
    }
   
}


let thay = new Carros("ford","ka",1.800,70.000)

console.log(thay)