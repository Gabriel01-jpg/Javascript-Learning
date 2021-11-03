//Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobroNumeroPares = numeros.filter(values => values % 2 === 0 )
.map(values => values * 2 )
.reduce((previous, current) => previous + current);

console.log(dobroNumeroPares);