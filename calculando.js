let sentinela;
let somaHoras = 0;
let somaMinutos = 0;
while(true){
    sentinela = parseInt(prompt('Informe as horas: '));
    if(sentinela < 0 ) break;
    const minutos = parseInt(prompt('Informe os minutos: '));
    somaHoras += sentinela;
    somaMinutos += minutos;
}

let calculoTudo = (somaHoras * 60) + somaMinutos;
let calculoHoras = Math.floor(calculoTudo / 60);
let calculoMinutos = calculoTudo % 60;

alert(`${calculoHoras} horas e ${calculoMinutos} minutos`);
