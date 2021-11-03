/* 
Object.values // RETORNA O VALOR DO OBJETO
Object.entries // RETORNA AS CHAVES E VALORES DO OBJETO EM UM ARRAY, SEPARADO POR CHAVE E VALOR
Object.getOwnPropertyDescriptor(o, 'prop') // Retorna as propriedades do objeto, sendo eles definidos pelo object.defineProperty...
... (spread) // Espalha o array e pode ser usado pra referencias outro array que vai ser jogado dentro do outro array

// Já vimos
// Object.keys(retorna as chaves)
// Object.freeze(congela o objeto)
// Object.defineProperties(define várias propriedades)
// Object.defineProperty(define uma propriedade)


*/
/*
// Object.assign(des, any) // SERVE PRA JOGAR VALORES DENTRO DE UM OBJETO, SENDO A PRIMEIRA OPCAO O DESTINO.
//  const produto = { nome: 'Camiseta', preco: 1.80 };
// const caneca = Object.assign({}, produto, { material: 'porcelana' })
// const casacos = {...produto, material: 'isopo'}
// caneca.nome = 'Caneca';
// console.log(produto);
// console.log(caneca);
// casacos.nome = 'Casacos';
// console.log(casacos); */