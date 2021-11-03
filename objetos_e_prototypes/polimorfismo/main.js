function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(value) {
    if(this.saldo < value){
        console.log('Saldo insuficiente!')
        this.verSaldo();
        return;
    }
    this.saldo -= value;
    this.verSaldo();

};
Conta.prototype.depositar = function(value) {
    this.saldo += value;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`AG/${this.agencia}/C:${this.conta}
    | SALDO: R$${this.saldo.toFixed(2)}
    `);
}
function contaCorrente(agencia, conta, saldo, limite = 100) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}
contaCorrente.prototype = Object.create(Conta.prototype);

contaCorrente.prototype.constructor = contaCorrente;
;
contaCorrente.prototype.sacar = function(value) {
    if(value > (this.saldo + this.limite)){
        console.log('Limite ultrapassado!');
        return;
    };
    this.saldo -= value;
    this.verSaldo();
}

function contaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}

contaPoupanca.prototype = Object.create(Conta.prototype);
contaPoupanca.prototype.constructor = contaPoupanca;


const CP = new contaPoupanca(1010, 545, 10);
const CC = new contaCorrente(457, 675, 0, 500);
CP.sacar(11);
CC.sacar(501);
