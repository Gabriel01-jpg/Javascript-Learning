/*
let a = 'A';
let b = 'B';
let c = 'C';

//Atribuição via desestruturação

// modo de atribuir valores de um array em variáveis
//Desestruturcao        Array
        [a, b, c] = [1, 2, 3];
const numero = [4, 5, 6];
//Desestruturacao       
[a, b, c] = numero; // <-- numero =  Array
console.log(a, b, c) */

const numeros = [1000, 2000, 3000, 4000, 5000, 6000]

const [primeiro, segundo, ...[,resto]] = numeros
// resto pegando o quinto valor 
console.log(primeiro, segundo);
console.log(resto);
