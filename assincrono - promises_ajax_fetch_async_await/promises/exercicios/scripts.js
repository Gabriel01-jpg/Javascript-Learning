function Soma(x, y){
    let soma = x + y;
    let p = new Promise((resolve, reject) => {
        if((x + y) % 2 === 0){
            resolve(`Sucesso! A soma ${x} + ${y} = ${soma} deu par!`)
        }else {
            reject(`Error: A soma ${x} + ${y} = ${soma} é impar!`)
        }
    })

    p.then((msg) => {
        console.log(msg)
    }).catch((e) => {
        console.log(e)
    })
}

Soma(2, 3);