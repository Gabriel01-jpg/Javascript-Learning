/// Funções de callback...
// Funções de callback servem pra chamar uma função após essa ser executada..


let n1 = 10;
let n2 = 30;
let n3 = 40;

function rand(min, max) {
    let valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

function n1(callback) {
    console.log(n1)
    n2();
}

function n2(callback) {
    console.log(n2)
    n3()
}

function n3() {
    console.log(n3)
}

setTimeout(function(){
    
}, rand(1000, 3000))