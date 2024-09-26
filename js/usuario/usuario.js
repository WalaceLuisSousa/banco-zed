export class Usuario {
  constructor(id, nome, email, cpf, senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.senha = senha;
  }

  getNome() {
    return this.nome;
  }
  getEmail(){
    return this.email;
  }
  getCpf(){
    return this.cpf;
  }
  getId(){
    return this.id;
  }
}
