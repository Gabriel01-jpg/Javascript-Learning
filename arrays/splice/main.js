const nomes = ['Luiz', 'João', 'Maria', 'Eduardo', 'Luiz', 'Eduarda', 'Luiz', 'Miguel'];

const nome = [];
// nomes.splice(índice, delete, elem1, elem2, elem3);
/* nomes.splice(nomes.length, 0, 'Arroz');
console.log(nomes, ); //removidos */

for(indice in nomes){
    if(nomes[indice] == 'Luiz'){
        nome.push(nomes[indice]);
        nomes.splice(indice, 1)
    }
}

console.log(nomes, nome)

