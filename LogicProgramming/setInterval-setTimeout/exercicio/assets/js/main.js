function getTimeFromSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}


const clock = document.querySelector('.timer')
const start = document.querySelector('#iniciar')
const pause = document.querySelector('#pausar')
const reset = document.querySelector('#zerar')
let seconds = 0;
let timer;

function startTimer(){
    timer = setInterval(function() {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;
    if(el == start){
        clearInterval(timer);
        startTimer();
        clock.classList.remove('color')
    }
    if(el == pause){
        clearInterval(timer);
        clock.classList.add('color')
    }

    if(el == reset){
        clearInterval(timer);
        seconds = 0;
        clock.innerHTML = '00:00:00';
        clock.classList.remove('color')
    }
})

/* start.addEventListener('click', function(){
    clearInterval(timer);
    startTimer();
    clock.style.color = 'black'
});

pause.addEventListener('click', function(){
    clearInterval(timer);
    clock.style.color = 'red'
}); 

reset.addEventListener('click', function(){
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = '00:00:00';
    clock.style.color = 'black'
}); */