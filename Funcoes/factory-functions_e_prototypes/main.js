// A Factory Functions são funções que fabricam objetos... Porém como gerar objetos que seus metódos apontam seu proto para o pai?
// Simples:

const falar = {
    falar() {
        console.log(this.nome, 'está falando')
    }
}

const beber = {
    beber() {
        console.log(this.nome, 'está bebendo')
    }
}

const comer = {
    comer() {
        console.log(this.nome, 'está comendo')
    }
}

const pessoaPrototype = Object.assign({}, falar, beber, comer)
function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {
            get: () => nome
        },
        sobrenome: {
            get: () => sobrenome
        }
    });
}

const pessoa = criaPessoa('Gabriel', 'Lima');
console.log(pessoa)