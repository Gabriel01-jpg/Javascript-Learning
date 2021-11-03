/*  // Filter -> Vai sempre retorna um array com a mesma quantidade de elementos ou menos...
// 
// Retorne os números maiores que 10



const maioresQue10 = [];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10){
        maioresQue10.push(numeros[i]);
        numeros.splice(i, 1);
        i = 0;
    }
}


console.log(maioresQue10);
console.log(numeros)

// UTILIZANDO FILTER PRA FILTAR O ARRAY

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//                                          valor, indice, array
const numeroFiltrado = numeros.filter((valor) => {
//    valor, indice, array
    console.log(valor );
    return valor > 10;

});

console.log(numeroFiltrado) */



const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Leticia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
    
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5 );

// Retorne as pessoas com mais de 50 anos
const idadeMaior = pessoas.filter(obj => obj.idade > 50 );

// Retorne as pessoas cujo nome termina com 'A';
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(idadeMaior, '\n');
console.log(pessoasNomeGrande, '\n');
console.log(nomeTerminaComA);

