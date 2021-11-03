//                0       1       2
const frutas = ['Pera', 'Maça', 'Uva'];

for(let i in frutas){ // Ler os índices (0, 1, 2... ) do array [VETOR de uma dimensão]
    console.log(frutas[i])
}

const pessoas = { 
    nome: 'Gabriel', 
    sobrenome: 'Lima',
    idade: 20
}


for(let chaves in pessoas){ // Ler as chaves da classe nome, sobrenome, idade
    console.log(chaves)
}