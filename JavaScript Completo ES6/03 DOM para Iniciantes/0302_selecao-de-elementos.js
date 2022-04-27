//selecionando por id 
const animais = document.getElementById('animais');
const faq = document.getElementById('faq');
const contato = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

//selecionando por class 
const gridSection = document.getElementsByClassName('grid-section');

//seleciona todos elementos que possuem as DUAS classes
const gridAndContato = document.getElementsByClassName('grid-section contato');

//seleciona usando tag 
//selecionando todas ul
const todasUl = document.getElementsByTagName('ul');


//retorna o primeiro elemento que possui a classe
console.log(gridSection[0]);

//seleciona de acordo com elemento css
const animaisCss = document.querySelector('.animais');
const contatoCss = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

// selecionar o primeiro link do site
// retorna só o primeiro q encontra e nao todos
const linksInternos = document.querySelector('[href^="#"');

// retorna uma nodelist
const animaisImg = document.querySelectorAll('.animais img');

//add classe na primeira ul
primeiroUl.classList.add('grid-section');

/*array-like 
parece um array mas n eh 
*/
const gridSectionHTMLCollection = document.querySelectorAll('.grid-section');

gridSectionHTMLCollection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

/* transforma o htmlcollection num array pra poder manipular */
const arrayGrid = Array.from(gridSectionHTMLCollection);
arrayGrid.forEach(function(item){
	console.log(item);
})

// exercicios
// Retorne no console todas as imagens do site 
const todasImg = document.getElementsByTagName('img');
const todasImg2 = document.querySelectorAll('img');

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAnimais = src= document.querySelectorAll('img[src^="img/imagem"]');

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"');

// Selecione o primeiro h2 dentro de .animais-descricao
const H2Animais = document.querySelector('.animais-descricao h2');


// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length -1]);



