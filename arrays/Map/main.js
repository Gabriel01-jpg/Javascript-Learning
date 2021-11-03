// Map - Alterar valores do array; Vai ter sempre o mesmo tamanho do array original, retornando eles de forma alterada...

// Dobre os valores do array
/* const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//                                 valor, índice, array
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro) */

// Para cada elemento:
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Leticia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
    
];
// Retorne apenas umas string com o nome da pessoa
const arrayNomes = pessoas.map(obj => obj.nome); // Passando return de forma automática com arrow function
console.log(arrayNomes)

// Remova apenas a chave 'nome' do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade })); // Envolvi o return da arrow fuction em parenteses para que não seja enterpretado como as chaves da função; Retorna um objeto com idade igual ao obj.idade...
console.log(idades)


// Adicione uma chave ID em cada objeto
const arrayComID = pessoas.map((obj) => {
    const newObj = {...obj};
    newObj.id = Math.floor(Math.random() * 5000)
    return newObj
});
console.log(arrayComID)
console.log(pessoas)
/* console.log(arrayComChave) */
