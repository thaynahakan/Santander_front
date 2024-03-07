class ContaCorrente extends ContaGeral {
  chequeEspecial: number = 500;

  //super chama o atributo da classe de cima
  sacar(valor: number): boolean {
    let novoSaldo = super.consultarSaldo;
    if (this.saldo >= this.chequeEspecial) {
      return false;
      console.log(`Você não tem limite para realizar esta operação de saque.`);
    } else {
      return super.sacar(valor);
    }
  }
  /* agencia: number;
    conta:number;
    saldo: float; //number 1,2,3,4 - 5,32
    movimentacoes: float[];

    //funções são executadas dentro da estrutura, métodos da classe
    //sacar
    //depositar
    //consultar saldo
    //consultar extrato */
}
