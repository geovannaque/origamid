// metodos do array 

var animais = [ 'gato', 'cachorro', 'ovelha'];

animais.pop();
animais.push('cabra'); //add no final do array
animais.length; // tamanho do array 


// loops

let i = 10;
while (i < 10){
	console.log(i);
	i++;
}

for (var item =0; item < animais.length; item ++){
	console.log(animais[item]);
	if(animais[item] === "ovelha"){
		break;
	}
}

//exercicios
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let BrVenceuCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i = 0; i < BrVenceuCopa.length; i++){
	console.log(`O brasil ganhou a copa de ${BrVenceuCopa[i]}.`);
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i =0; i < frutas.length; i++){
	console.log(frutas[i]);
	if(frutas[i] === "Pera"){
		break;
	}
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta);