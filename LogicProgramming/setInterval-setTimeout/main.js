function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

//Funcao para trabalhar com intervalo de tempo;


const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 6000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000)