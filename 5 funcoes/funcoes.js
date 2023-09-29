// 1 declara a funcao
function imprimeTexto(texto){
console.log(texto)
}

// //executa a funcao
// imprimeTexto("hello world")
// imprimeTexto("hello world 2")

// tres formas de escrever as funcoes

//maneira 1
function soma(){
    const num1 = 3
    const num2 = 4
    const resultado = num1+num2
    console.log(resultado)
}

function soma2(){
    resultado = 2+2
    return resultado
}

soma()

console.log(soma2())
console.log('-------')
imprimeTexto(soma2())