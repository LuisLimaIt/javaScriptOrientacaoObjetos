//Todas as vezes que criamos um arquivo javaScript que começa com letras maiusculas, significa que ele representa uma classe.
export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}



