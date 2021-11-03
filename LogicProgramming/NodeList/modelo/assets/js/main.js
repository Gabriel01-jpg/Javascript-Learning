const styleComputed = getComputedStyle(document.body); // pegando os estilos computados do body getComputedStyle(Aqui passa o elemento)

const bodyBgdColor = styleComputed.backgroundColor // pegando apenas a cor do background do styleComputed que foi declarado acima

const paragrafos = document.querySelector('.paragrafos'); // pegando o paragráfo
const ps = paragrafos.querySelectorAll('p') // pegando nodelist com todos os itens P do paragráfo

for(let p of ps){ // iterando sobre os elementos <p> e adicionando o background da cor de fundo do body que foi pego acima com getComputedStyle.
    p.style.backgroundColor = bodyBgdColor
    p.style.color = 'White'
}