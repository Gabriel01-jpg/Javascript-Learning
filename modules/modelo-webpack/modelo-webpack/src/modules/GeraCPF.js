import validaCPF from './validaCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        const cpfSorteado = Math.floor(Math.random() * (max - min) + min);
        return String(cpfSorteado);
    }

    geraDigitos() {
        let novoCPF = this.rand();
        const digito1 = validaCPF.retornaDigito(novoCPF);
        const adicionaDigito = novoCPF + digito1;
        const digito2 =  validaCPF.retornaDigito(adicionaDigito);
        return String(adicionaDigito + digito2);
    }

}