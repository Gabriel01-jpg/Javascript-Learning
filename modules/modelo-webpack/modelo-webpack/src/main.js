import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css';

class frontCPF{
    constructor(){
        this.formulario = document.querySelector('form');
        this.input = this.formulario.querySelector('input');
    }

    iniciar(){
        this.negandoEventoDefault();
        this.inserirCPF();
    }

    preventDefault(e){
        e.preventDefault();
    }

    negandoEventoDefault() {
        this.formulario.addEventListener('submit', this.preventDefault)
    }

    formataCPF(cpf) {
        let Digitos = cpf.slice(0, 3) + '.'
        Digitos += cpf.slice(3, 6) + '.'
        Digitos += cpf.slice(6, 9) + '-'
        Digitos += cpf.slice(-2);
        return Digitos
    }

    inserirCPF(){
        const geraCPF = new GeraCPF();
        let CPFGerado = geraCPF.geraDigitos();
        this.input.value = this.formataCPF(CPFGerado)
    }
}

const button = document.querySelector('button');
const cpfObj = new frontCPF();
button.addEventListener('click',(e) => {
    cpfObj.iniciar();

})
