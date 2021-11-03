function main () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /* Espiã para averiguar se algo aconteceu
    form.onsubmit = function (event) {
        event.preventDefault();
        alert(1);
        console.log('Cheguei aqui')
         
    }; */
    /* Adiciona um escutador de eventos no formulário*/

    function criaPessoa (nome, sobrenome, peso, altura) {
        return {nome, sobrenome, peso, altura}
    }

    const pessoas = [];

    function eventForm(event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value))
        console.log(pessoas)
    }
    form.addEventListener('submit', eventForm);
}

main();