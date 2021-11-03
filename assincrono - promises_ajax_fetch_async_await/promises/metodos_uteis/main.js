function rand(min = 1, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
    }    
    setTimeout(() => {
        resolve(msg);
        return;
        }, tempo);
    });
}

// Promise.all // Promise.race // Promise.resolve // Promise.reject //

// Promise.all -> Vai passar um array com promessas ou valores já resolvidos:
const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand()),
    esperaAi('Promise 2', rand()),
    esperaAi('Promise 3', rand()),
    esperaAi('Promise 4', rand()),
    // esperaAi(1000, rand(10, 15)),
    // 'Outro valor'
];

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor)
//     })
//     .catch(function(error){
//         console.log(error + ' - Cheguei no catch')
//     });

// // Promise.race retorna o valor da primeira promise resolvida, como estamos utilizando um valor aleatório ele não para a execução mesmo já tendo retornado um valor... 
// //   
// Promise.race(promises)
//     .then(function(valor) {
//         console.log(valor)
//     })
//     .catch(function(error){
//         console.log(error + ' - Cheguei no catch')
//     });

function baixaPagina() {
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', rand());
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(er => console.log(er))