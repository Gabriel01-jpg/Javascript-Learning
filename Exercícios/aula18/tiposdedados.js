/* Valores primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados 

Referência (mutável) - array, object, function = Passados por referência
*/

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

// Valores passados por referência são criadas referências para o mesmo endereço de memória, nesse caso para copiar precisamos fazer um sprecth;

let c = [...a];

a.push(25);
console.log(c);
console.log(a)