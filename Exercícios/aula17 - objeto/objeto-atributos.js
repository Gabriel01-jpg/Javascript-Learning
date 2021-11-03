const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Lima',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}, tenho ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

