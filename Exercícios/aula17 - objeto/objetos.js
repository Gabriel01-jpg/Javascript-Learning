// Criação de objeto

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Lima',
    idade: 19
};

pessoa.nome = 'Gustavo'

console.log(pessoa)

/* Forma curta para  - function criaPessoa (nome, sobrenome, idade){
    return { 
    nome: nome,
    sobrenome: sobrenome,
    idade: idade }
 } */
function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Gabriel', 'Lima', 25);
const pessoa2 = criaPessoa('Gustavo', 'Oliveira', 30);

console.log(pessoa1.idade)
console.log(pessoa2.nome)
