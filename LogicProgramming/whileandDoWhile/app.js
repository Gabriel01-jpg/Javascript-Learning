
function NumRandom (min, max){
    let num = Math.random() * (max - min) + min;
    return Math.floor(num);
}


let A = NumRandom(1, 30);
let tentativas = 0;
// SE PREOCUPAR EM NÃO REDECLARAR A VARIÁVEL DENTRO DO FOR, SE NÃO O LAÇO VAI FICAR INFINITO
while (A !== 15){
    tentativas++;
    A = NumRandom(1, 30);
    console.log(A)
}

console.log(tentativas)