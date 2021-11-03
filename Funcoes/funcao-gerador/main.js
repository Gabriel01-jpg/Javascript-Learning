// Função geradora para sua execucao durante o retorna pelo yield e avança os valores de retorne conforme utilizacao do next...

function* geradora(){
    // codigos...
    yield 'valor 1';
    // codigos
    yield 'valor 2';
    // codigos
    yield 'valor 3';

}

g1 = geradora();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);    

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++
    }
}
const g2 = geradora2();

function* gerador3(){
    yield 1;
    yield 2;
    yield 3;
}

function* gerador4() {
    yield* gerador3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = gerador4();
for(let valor of g4){
    console.log(valor);
}
