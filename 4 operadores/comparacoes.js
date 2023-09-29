// == (comparacoes implicitas)

const numero = 5
const texto = "5"
const comparacaoImplicita = numero == texto
console.log(comparacaoImplicita)

// 

const numero2 = 5
const texto2 = "5"
const comparacaoExplicita = numero === texto
console.log(comparacaoExplicita)

//typeof

console.log(typeof numero, typeof texto, typeof comparacaoImplicita ,typeof comparacaoExplicita)

// == compara o valor
// === compara o valor e o tipo de dado

// conversao explicita

Number()
String()