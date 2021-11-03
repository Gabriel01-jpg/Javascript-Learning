// defineProperty - defineProperties
// Definir propriedades;

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave  
        configurable: true, // configuravel
        writable: false,
        get: function () {
            return estoquePrivado; 
        },
        set: function(value){
            if(typeof value !== 'number'){
                throw new TypeError(`${value} is not a number`);
            }
            estoquePrivado = value;
        }
    })
}

const produto1 = new Produto('Camiseta', 20, 5);
console.log(produto1);
produto1.estoque = 'Teste';
console.log(produto1.estoque)