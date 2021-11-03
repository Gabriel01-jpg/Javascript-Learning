function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(value) {
    this.preco = this.preco - (this.preco * (value / 100));
};

const p1 =  new Produto('Camiseta', 50);
/* // new Object -> Object.prototype // Função atrelada ao objeto
const objA = {
    chaveA: 'A'
    // __Proto__: Object.prototype
};
const objB = {
    chaveB: 'B'
    // __Proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB)
console.dir(objC.chaveA) */