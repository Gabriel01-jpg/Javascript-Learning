function rand(min = 1, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(msg);
        }, tempo);
    });

}

esperaAi('Frase 1', rand())
    .then(resposta => { 
        console.log(resposta)
        return esperaAi('Frase 2', rand());
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand());
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch();

/* esperaAi('Frase 2', rand())
esperaAi('Frase 3', rand())
esperaAi('Frase 4', rand())  */