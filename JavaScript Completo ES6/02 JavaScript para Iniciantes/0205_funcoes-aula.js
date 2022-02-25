/* ANOTAÇÕES*/

//calculando a area de um quadrado 
function areaQuadrado(lado){
 return lado * lado;
}
console.log(areaQuadrado(10));

//função pi
function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

//função IMC
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}
console.log(imc(53, 1.56), imc(48, 1.58));
// os valores entre parentese sao os argumentos
// imc Geovanna / imc Sabrina 

//função cor favorita 
function corFavorita(cor){
  if(cor==='preto'){
    return 'Você é emo.' ;  
  }else if( cor =='verde'){
    return 'Você é good vibes.';
  }else{
    return "Ai já não sei"
  }
}
console.log(corFavorita('preto'), corFavorita('verde'), corFavorita('rosa'));

//funçao callback
function mostraConsole() {
  console.log('Oi')
}
addEventListener('click', mostraConsole);



// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado){
  return !!dado;
}
isTruthy();


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return total = lado*4;
}
console.log(perimetroQuadrado(10));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
   return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Geovanna', 'Queiroz'));



// Crie uma função que verifica se um número é par
function ehPar(num){
  if (num % 2 === 0){
    return 'É par';
  }else{
    return 'É impar';
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
 return typeof(dado);
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Geovanna Queiroz')});


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);