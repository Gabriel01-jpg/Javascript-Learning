function rand(min = 1, max = 2){
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
/* 
esperaAi('Fase 1', rand())
    .then((value) =>{
        console.log(value);
        return esperaAi('Fase 2', rand(1, 2))
    })
    .then((value) =>{
        console.log(value);
        return esperaAi('Fase 3', rand(1, 2))
    })
    .then((value) =>{
        console.log(value);
    })
    .catch(e => console.log(e));
 */
/* async function executa() {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1)
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2)
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3)
}

executa();
console.log('Testando')
 */
