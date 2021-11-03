const array1 = [1, 2, 3];
const array2 = [4, 5, 5];
/* const array3 = array1.concat(array2); */
const array3 = [...array1, ...array2]
// operador spread, espalha o array e joga dentro do outro, não sendo passado por referência...
console.log(array3)