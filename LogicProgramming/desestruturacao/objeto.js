const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Lima',
    idade: 30,
    endereco: {
        rua: 'Maria Faleiro',
        bairro: 'Boa vista'
    }
};

// DESESTRUTURACAO
// declarando as variveis como let e em seguida atribuindo os valores do objeto nelas...
let { nome, sobrenome, endereco: {bairro}} = pessoa
console.log(nome, sobrenome, bairro)