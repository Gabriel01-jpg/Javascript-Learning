// declaracao de funcao (Function hoisting)
// function hoisting - Motor do javascript eleva a declaração da função ao topo, podendo usar a função em linhas antes de declarar

function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de primeira-classe)
// Função pode ser tratada como dado. Assim como se declara váriaveis...
// Function expression 
const funcaoDado = function(){
    console.log('Sou um dado.');
};
// Podendo ser jogada dentro de outra funcao pra ser executada...
function executaFuncao(funcao){
    console.log('Sua função será executada abaixo')
    funcao();
}


// Arrow function... 
const funcaoArrow = () =>{
    console.log('Sou uma arrow function')
};

funcaoArrow();

// Todas as funções acima são tratadas como objeto de primeira-classe

// Dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando...')
    }
}
obj.falar()