class Poupanca extends ContaGeral {
  taxaDeRendimento: number;

  sacar(valor: number): boolean {
    let novoSaldo = this.saldo - valor;
    if (novoSaldo < 0) {
      return false;
    }
    return super.sacar(valor);
  }
  /*
   private _taxaDeRendimento: number;
  set taxaDeRendimento(valor: number){
    if(valor <= 0) // Lançar Erro!
    this.taxaDeRendimento = valor;
  }
  //depositar
  //consultar saldo
  //sacar
  //consultar extrato
  //taxa de rendimento
  //exibir a taxa de rendimento */
}

let p = new Poupanca();
console.log(p.taxaDeRendimento);
