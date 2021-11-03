function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
};

const pessoa1 = criaPessoa('Gabriel', 'Lima');
// Deixando os valores do objeto congelado para que não possam ser alterados...
Object.freeze(pessoa1)
pessoa1.nome = 'Outro';
// Tentando alterar o atributo nome do objeto...
console.log(pessoa1)
// E se eu quiser alterar dentro da criação da função?
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
    // com isso, ao utilizar o this, estou referênciando a própria função para que não possa alterar o valor dos atritubos, sendo essa construtora agora um objeto que não pode ser modificado...
}

const Pe1 = new Pessoa('Gustavo', 'dos Anjos');
Pe1.nome = 'Outro nome';
console.log(Pe1);