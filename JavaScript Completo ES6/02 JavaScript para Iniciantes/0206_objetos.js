var pessoa ={
  nome: 'Geovanna',
  sobrenome: 'Queiroz',
  idade: 25
}
console.log(pessoa);

//calculando quadrado
var quadrado ={
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lado * lado;
  },
}
console.log(quadrado.area(10))

//objetos servem pra organizar o codigo e dividir eles em partes menores

// exercicios

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa ={
  nome: 'Geovanna',
  sobrenome: 'Queiroz',
  nome_completo(){
    return this.nome + " " + this.sobrenome;
  },
}
console.log(pessoa);


// Modifique o valor da propriedade preco para 3000
carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco =3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
cachorro ={
  raca: 'labrador',
  cor: 'preto',
  idade: '10',
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'late';
    }
    else{
      return 'abana o rabo';
    }
  }
}