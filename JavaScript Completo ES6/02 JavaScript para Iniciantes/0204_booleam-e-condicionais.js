/* ANOTAÇÕES

string sem nada dentro = falso
se resulta em NaN = falso
undefined = falso


 && -> um false já retorna false  / se n tiver false retorna o último valor

|| -> retorna o 1º valor que for true 

*/


//EXERCÍCIO
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
if(nome){
  console.log('True')
}else{
  console.log('False')
}

var idade = 28;
if(idade){
  console.log('True')
}else{
  console.log('False')
}

var possuiDoutorado = false;
if(possuiDoutorado){
  console.log('True')
}else{
  console.log('False')
}

var empregoFuturo;
if(empregoFuturo){
  console.log('True')
}else{
  console.log('False')
}

var dinheiroNaConta = 0;
if(dinheiroNaConta){
  console.log('True')
}else{
  console.log('False')
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}


