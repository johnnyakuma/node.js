console.log(Math.round(2.3))// faz o arrendodamento para um numero inteiro mais proximo

console.log(Math.ceil(2.1))// faz arredondamento para um numero inteiro maior

console.log(Math.floor(3.9))//Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

console.log(Math.trunc(4.9))//Desconsidera os números decimais, o que é conhecido como truncamento.

console.log(Math.pow(4,2))//Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
console.log(Math.pow(4,3))//''

console.log(Math.sqrt(16))

console.log(Math.min(0, 1,4,6,100)) //Retorna o menor valor entre os argumentos.
console.log(Math.max(0, 1,4,6,100)) //Retorna o maior valor entre os argumentos.

let numeroAleatorio = Math.random().toFixed(2) * 100

console.log(numeroAleatorio)