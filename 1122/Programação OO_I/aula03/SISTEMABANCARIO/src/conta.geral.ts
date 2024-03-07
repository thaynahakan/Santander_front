class ContaGeral {
  agencia: number;
  conta: number;
  saldo: number;
  extrato: string[] = [];

  sacar(valor: number): void {
    // Atualiza o saldo
    let novoSaldo = this.saldo - valor;
    let mensagemExtrato = `Você Sacou ${valor} | Saldo anterior: ${this.saldo} | Saldo atualizado: ${novoSaldo}`;

    this.saldo = novoSaldo; // Correção: estava escrito novoSalvo
    // Registra a movimentação
    this.extrato.push(mensagemExtrato);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    let novoSaldo = this.saldo + valor;
    let mensagemExtrato = `Você Depositou ${valor} | Saldo anterior: ${this.saldo} | Saldo atualizado: ${novoSaldo}`;
    this.saldo = novoSaldo;
    this.extrato.push(mensagemExtrato);
  }

  consultarExtrato(): string[] {
    return this.extrato;
  }
}
