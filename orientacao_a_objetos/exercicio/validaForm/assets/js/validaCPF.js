/*  CPF'S : 992.786.700-06 - 530.799.300-53 */

class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });

    }

    static retornaDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length + 1;
        for(let stringNumero of cpfParcial){
            total += reverso * Number(stringNumero)
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    geraNovoCPF(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.retornaDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.retornaDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
        
    }

    eSequencia() {
        // charAt retorna o caractere na posicao
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;

    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCPF()
        return this.novoCPF === this.cpfLimpo;
    }
}

/* const validaCPF = new ValidaCPF('530.799.300-53');
if(validaCPF.valida()){
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
 */