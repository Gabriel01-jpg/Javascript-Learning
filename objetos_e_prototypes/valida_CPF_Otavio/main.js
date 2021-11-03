function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
           return cpfEnviado.replace(/\D+/g, '');
       } 
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCPF = cpfParcial + digito1 + digito2

    return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const soma = cpfArray.reduce((previous, current) => {
        previous += (regressivo * Number(current));
        regressivo--;
        return previous;
    }, 0);
    const digito = 11 - (soma % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};


const validarCPF = new ValidaCPF('614.485.423-16');
if(validarCPF.valida()){
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
/* cpf.valida(); */