const verdadeiro = true

let nome = 'Gabriel'
let nome2 = 'Luiz'

// Let funciona atráves de escopo-block e se a variável não existir, procuro no escopo acima
// Var eleva as variáveis e as declara primeiro, no caso das globais

if(verdadeiro){
    let nome = 'Luís'
    let sobrenome = 'Augusto'
}

console.log(nome, nome2)

