const data = new Date('2001-09-17 20:15:59.100'); // retorna data conforme parâmetros
// const data = new Date() // retorna data atual com os milisegundos


function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}



function formatarData(data){
    dia = zeroEsquerda(data.getDate());
    mes = zeroEsquerda(data.getMonth());
    ano = zeroEsquerda(data.getFullYear());

    hora = zeroEsquerda(data.getHours());
    min = zeroEsquerda(data.getMinutes());
    sec = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

console.log(formatarData(data))
