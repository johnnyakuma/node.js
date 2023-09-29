
//funcao comum

function apresentarNome(nome){
    return `meu nome é ${nome}`
}

//arrow Function

const apresentarArrow = nome => `meu nome é ${nome}`
console.log(apresentarArrow("Johnny"))

const somaDeNumerosPequenos = (x,y) => {
    if (x > 10 || y > 20){
        return 'somente numeros de 1 a 9'
    } else{
        return x+y
    }
}

console.log(somaDeNumerosPequenos(1, 8))
console.log(somaDeNumerosPequenos(50,50))
console.log(somaDeNumerosPequenos(50,5))