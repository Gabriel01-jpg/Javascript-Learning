// Herença é quando uma classe herda os metódos de outra, para poupar processamento...
// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.construtor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype= Object.create(Produto.prototype);
Caneca.prototype.construtor = Camiseta;

Caneca.prototype.aumento = function(baseAumento) {
    this.preco = this.preco + (this.preco * ((this.preco / 100) + baseAumento))
}

const caneca = new Caneca('Marfin', 17, 'porcelana');
console.log(caneca)
caneca.aumento(0.2);
console.log(caneca)

