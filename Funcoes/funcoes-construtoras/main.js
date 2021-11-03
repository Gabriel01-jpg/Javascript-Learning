// Função construtora retorna objetos >- objetos
// Função fábrica -> objetos
// Construtora -> 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
} 

const p1 = new Pessoa('Gabriel', 'Lima');
const p2 = new Pessoa('Luiz', 'Otávio');
