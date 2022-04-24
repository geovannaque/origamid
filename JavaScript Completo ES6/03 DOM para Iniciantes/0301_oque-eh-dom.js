// o que eh DOM
//document object model 
console.log(window);
window.innerHeight; // retorna altura do browser

window.alert('Isso é um alerta');
alert('Isso é um alerta'); 

document.querySelector('h1'); // Seleciona o primeiro h1

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

//EXERCICIOS
// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classeAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela 
const windowWidth = window.innerWidth;
console.log(windowWidth);