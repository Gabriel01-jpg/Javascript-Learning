const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');  


function escutaInput(input){
    input.addEventListener('input', function(){
        let verifica = input.value / 2;
        if(Number.isNaN(verifica)){
            alert('Digite um valor válido')
            input.value = ''
        }
    })
}

if(escutaInput(peso)){
    console.log('Passou')
} else if (escutaInput(altura)){
    console.log('Também passou')
} else {
    function validaIMC() {
        const form = document.querySelector('.form');
        const msg = document.querySelector('.mensagem')
    
        function mudaCompormento(event) {
            event.preventDefault()
        }

        function categoria (imcCalculado){
            if(imcCalculado <= 18.5 && imcCalculado > 10){
                msg.innerHTML = `Seu IMC é ${imcCalculado.toFixed(2)} e você está abaixo do peso`
            } else if(imcCalculado >= 18.5 && imcCalculado < 24.9){
                msg.innerHTML = `Seu IMC é ${imcCalculado.toFixed(2)} e você está com peso normal`
            } else if(imcCalculado >= 25 && imcCalculado <= 29.9){
                msg.innerHTML = `Seu IMC é ${imcCalculado.toFixed(2)} e você está com sobrepeso`
            } else if(imcCalculado >= 30 && imcCalculado <= 34.9){
                msg.innerHTML = `Seu IMC é ${imcCalculado.toFixed(2)} e você está com sobrepso`
            } else if(imcCalculado >= 35 && imcCalculado <= 39.9){
                msg.innerHTML = `Seu IMC é ${imcCalculado.toFixed(2)} e você está com sobrepso`
            } else if(imcCalculado >= 40 && imcCalculado < 80){
                msg.innerHTML = `Seu IMC é ${imcCalculado.toFixed(2)} e você está com sobrepso`
            } else {
                msg.innerHTML = `Digite valores válidos`
            }
        }
    
        form.addEventListener('submit', mudaComporevenmento);
    
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');  
        imcCalculado = peso.value / (altura.value * altura.value)
        if(peso.value === '' && altura.value === ''){
            msg.innerHTML = 'Preencha os campos'
        } else if (peso.value == ''){
            msg.innerHTML = 'Preencha o campo de peso'
        } else if (altura.value == ''){
            msg.innerHTML = 'Preencha o campo de altura'
        } 
        else {
            categoria(imcCalculado)
        }
        
    }
}





