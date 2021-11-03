// Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

/* const valores = [1, 2, 3, 4, 5, 6, 7]

const soma =  valores.reduce((previus, current) => {
    console.log(`${previus} + ${current}`);
    return previus + current;
})
console.log(soma) */

// Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

/* const valores = [3, 50, 70, 90, 30, 15, 12, 54, 60];
const soma = valores.filter(values => values % 2 === 0 ).reduce((previus, values) => previus + values );

console.log(soma) */

// Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
/* const valores = [3, 50, 70, 90, 30, 15, 12, 54, 60];
const somaImpares = valores.filter(values => values % 2 !== 0).reduce((previus, current) => previus + current);
console.log(somaImpares); */

// Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor.
/* const valores = [3, 50, 3, 70, 90, 70, 30, 15, 90, 12, 54, 60, 60, 80];
const obj = valores.reduce((previous, current) => {
    if(previous[current]){
        previous[current] = previous[current] + 1 
    } else {
        previous[current] = 1;
    }
    return previous
}, {});
console.log(obj); */

// Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor).

const valores = [3, 50, 3, 70, 90, 70, 30, 15, 90, 12, 54, 60, 60, 80];
const repeatNumber = valores.reduce((previous, current) => {
    previous[current] ? (previous[current] = false) : (previous[current] = true);
    return previous
}, {});

const vetAllValues = Object.values(repeatNumber).map((item, index) => item && index).filter(item => item !== false);
console.log(vetAllValues)
console.log(repeatNumber)