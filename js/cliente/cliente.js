export class Cliente {
    constructor(nome, email, cpf) {
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.saldo;
    }
   
    getNome(){
        return this.nome;
    }

    getSaldo() {
      return this.saldo;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }
  }
  