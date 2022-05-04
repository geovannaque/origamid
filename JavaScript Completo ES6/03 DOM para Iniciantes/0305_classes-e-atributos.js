//class list 

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes ou mais 
menu.classList.remove('ativo'); 
menu.classList.toggle('ativo'); // adiciona/remove a classe.  se possui remove, se n possui adc. retorna boolean, true e false
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

console.log(menu.classList[0]); // seleciona a 1º classe etc pois é um array 

menu.className += 'vermelho'; //add classe

//attributes
const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo
console.log(animais);
console.log(animais.attributes['data-texto']); // nao pode ter hifen, entao tem q passar como string 

//get e set attribute
//buscar o atributo ja especifico 
const img = document.querySelector('img');

const srcImg = img.getAttribute('src');
img.getAttribute('src'); // valor do src
console.log(srcImg);

img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

const has = img.hasAttributes(); // retorna true ou false se tiver atributos
console.log(has);


//read only vs writable 
const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only


//exercicios 
// Adicione a classe ativo a todos os itens do menu
const liMenu = document.querySelectorAll('.menu li');

liMenu.forEach((item) =>
  item.classList.add('ativo')
  );
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

liMenu.forEach((item) =>
  item.classList.remove('ativo')
  );
liMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgAlt = document.querySelectorAll('img');
imgAlt.forEach((item)=>
  item.hasAttribute('alt')
  );
  console.log(imgAlt);

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'NovoLink');
console.log(linkExterno);