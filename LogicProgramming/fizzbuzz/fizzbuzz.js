// Escreva uma função que receba um número e retorne o seguite:
// Número é divisível por 3 == Fizz
// Número é divisível por 5 == Buzz
// Número é divisível por 3 e 5 == FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorne o próprio número
// Checar se o número é realmente um número =  Retorna o próprio número
// Use a função com número de 0 a 100


function fizzBuzz (number){
    if(typeof number != 'number'){
        return number
    } else {
        return teste = number % 3 === 0 && number % 5 === 0 ? 'FizzBuzz' : number % 3 === 0 ? 'Fizz' : number % 5 === 0 ? 'Buzz' : number
    
    }
}
console.log('a', fizzBuzz('b'))
for (i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}