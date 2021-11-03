// função recursiva é uma função que chama a sí mesma durante a execução da função;


(function recursiva(max){
    if (max > 10) return;
    console.log(max)
    max++;
    recursiva(max);

}) (-10);