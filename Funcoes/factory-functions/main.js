// Factory functions são funções de fábrica são funções que constroem outras...

function maker(y){
    return function(x){
        return y * x;
    }
}

const dobro = maker(2);
console.log(dobro(5))