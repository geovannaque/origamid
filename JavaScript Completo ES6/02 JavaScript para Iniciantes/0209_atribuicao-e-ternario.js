//atribuições

let x = 1;
let y = 2;

x+=y;  // x = x+y;
x-=y;  // x = x-y;
x*=y;  //x = x * y:
x/=y;  //x = x/y;
x%=y;  //x = x%y;
x**=y;  //x = x**y;

console.log(x);


//operador ternario 
let podeBeber;
let idade = 5;

podeBeber = idade >= 18 ? 'Pode Beber' : 'Não pode Beber';
console.log(podeBeber);


//ifs sem {} e ; pois só tem 1 linha
let possuiCNH = true;
if(possuiCNH)
	console.log('Pode Dirigir')
else
	console.log('Não pode dirigir')

//exercicios
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500;
console.log(scroll);


// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
let possuiCarro = true;
let possuiCasa = false;
let darCredito;
darCredito = (possuiCasa && possuiCarro)? 'Crédito Aprovado' : 'Não pode ter crédito';
console.log(darCredito);