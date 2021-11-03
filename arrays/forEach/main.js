const a1 = [];
let total = 0;

while(true){
    let numeroAleatorio = Math.floor(Math.random() * 100 );
    if(numeroAleatorio > 80) break;
    a1.push(numeroAleatorio)
}



a1.forEach(valor => {
    total += valor
    console.log(valor)
});

console.log(a1, total)

