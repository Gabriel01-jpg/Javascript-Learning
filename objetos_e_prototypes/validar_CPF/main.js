// 705.484.450-52 // 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x -> *
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

6x 1x 4x 4x 8x 5x 4x 2x 3x
10 9  8  7  6  5  4  3  2
60 9  32 28 48 25 16 6  6 =  

11 - (237 % 11) == 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x->
11 10 9  8  7  6  5  4  3  2 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

*/

function ValidaCPF(CPF){
    
    this.CPF = CPF.replace(/\D+/g, '');

    this.inicia = () => {614
        this.compara();
    }

    this.validaPrimeiroDigito = () => {
        let CPFCalculo = this.CPF.slice(0, -2);
        let ArrayCPF = Array.from(CPFCalculo);
        let soma = ArrayCPF.map((el, indice) => el * (10 - indice)).reduce((previus, current) => previus + current);
        let primeiroDigito = 11 - (soma % 11);
        ArrayCPF.push(primeiroDigito)
        return ArrayCPF;
    }

    this.validaSegundoDigito = () => {
        const ArrayCPF = this.validaPrimeiroDigito();
        let soma = ArrayCPF.map((el, indice) => el * (11 - indice)).reduce((previus, current) => previus + current)
        soma = 11 - (soma % 11);
        ArrayCPF.push(soma);
        return ArrayCPF;
    }

    this.compara = () => {
        let Validado = this.validaSegundoDigito().toString();
        Validado = Validado.replace(/\D+/g, '');
        console.log(Validado)
        if(Validado == this.CPF){
            alert('CPF válido;')
        } else {
            alert('CPF inválido')
        }
        
    }

}

let CPF = prompt('Digite seu CPF: ');
const validaCPF = new ValidaCPF(CPF);
validaCPF.inicia();




/* function ValidaCPF(CPFAlterado){
    
} */