// Função, reduzir o valor do array para um único elemento.

/* const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//                                    Acumulador, valor, índice, array
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total);
console.log(numeros) */



// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Gabriel', idade: 67 },
    {nome: 'Leticia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },

];
 
const maisVelha = pessoas.reduce((previous, current) => {
    previous = previous.idade > current.idade ? previous : current
    return previous

}, {})

console.log(maisVelha)