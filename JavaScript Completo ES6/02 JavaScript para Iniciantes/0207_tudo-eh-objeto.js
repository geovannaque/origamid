// tudo eh objeto

//strings possuem metodos padroes
var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'

// metodos de numeros;
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'


//exercicios
// nomeie 3 propriedades ou métodos de strings

let minha_string = 'essa eh minha string';

console.log(minha_string.length); //tamanho da string
console.log(minha_string.indexOf('minha')); //encontrar uma substring dentro da string
console.log(minha_string.toLowerCase()); // deixa todos os caracteres minusculos
console.log(minha_string.toUpperCase()); // deixa todos os caracteres maiusculos
console.log(minha_string.replace('minha', 'sua')); //atualiza parte da string


// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
