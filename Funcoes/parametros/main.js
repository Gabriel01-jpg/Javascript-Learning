// Arguments, sustenta tudo que for passando como parametro para a funçao

/* function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7);  Não recebo parâmetros na função mas enviei 3 argumentos e ela aceitou, salvando dentro do arguments...*/
/* 
function funcao ({ nome, sobrenome, idade }){ // recebendo via desestruturação de objeto
    console.log(nome, sobrenome, idade)
}
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Lima',
    idade: 19
}

funcao(pessoa) // passando o objeto como argumento

function funcaoArray([nome, sobrenome, idade]){ // recebendo via desestruturação de objeto
    console.log(nome, sobrenome, idade) // imprimindo o valor

}

const people = ['Gabriel', 'Lima', 30] // array de objetos 

funcaoArray(people) // chamando o função de passando como argumento os valores do arrays para ser pego via desestruturação.... */

function conta(operador, acumulador, ...numeros){ // os três pontinhos vão pegar todo o resto 
    console.log(operador, acumulador, numeros);
    for(let numero of numeros){
        acumulador += numero;
    }
    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50);