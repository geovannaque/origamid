
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