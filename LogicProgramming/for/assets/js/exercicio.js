const elementos = [
    { tag: 'p', texto: 'Frase 1'},
    { tag: 'div', texto: 'Frase 2'},
    { tag: 'section', texto: 'Frase 3'},
    { tag: 'footer', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div'); // Criando um elemento DIV


for (let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i]; // pegando os elementos do objeto via desestruturação, e atribuindo as váriaveis tag e texto
    const element = document.createElement(tag) // criando um elemento com o objeto tag
    // element.innerText = texto; // adicionando texto dentro desse elemento
    let textoCriado = document.createTextNode(texto) // Criando um nó de texto
    element.appendChild(textoCriado) // adicionando o nó de texto dentro do element
    div.appendChild(element) // adicionando o elemento dentro de um tag div
}
container.appendChild(div) // adicionando a div dentro da section.container, para ser exibido