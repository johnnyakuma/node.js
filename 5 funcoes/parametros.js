function soma(x=0, y=0) {
    return x + y
}

console.log(soma(15, 5))
console.log(soma(15, -5))
console.log(soma(15, 5.4))
console.log(soma(15, -100))

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade} anos`
}

console.log(nomeIdade("Johnny", 29))

function multiplica(x = 1, y = 1) {
    return x * y
}

console.log(multiplica(soma(2,3),soma(4,3)))
console.log(multiplica(soma(2,3)))