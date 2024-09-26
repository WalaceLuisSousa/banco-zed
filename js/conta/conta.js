export class Conta{
    constructor(id, numeroConta, tipo, saldoInicial = 0) {
        this.id = id;
        this.numeroConta = numeroConta;
        this.tipo = tipo;
        this.saldo = saldoInicial;
      }

      
}