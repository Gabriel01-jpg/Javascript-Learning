//                    0           1       2
// const nomes = new Array('Gabriel', 'Joao', 'Joana');
const nomes = ['Gabriel', 'Joao', 'Joana'];
const novo = [...nomes]; // spread operator, cópia o valor do array não passando por referência o mesmo. 
nomes[2] =  'Joaquina';
novo[1] = 'Luiz';
novo.push(nomes.pop());
// .push adiciona valor ao final do array
// .pop remove o último índice do array e retorna ele

const removido = novo.shift();
// .shift remove o primeiro índice do array e retorna ele...

novo.unshift(removido);
// .unshift adiciona no ínicio do array...

const fatiado = novo.slice(0, -1);
console.log(removido);
console.log(nomes.length, nomes);
console.log(novo.length, novo);
console.log(fatiado);