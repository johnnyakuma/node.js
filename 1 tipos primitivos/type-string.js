const nome1 = "Johnny"
const nome2 = 'Johnny'
const nome3 = `Johnny`

const verificaSeEIgual = nome1 === nome2 //true
const verificaSeEIgual2 = nome1 === nome3 //true
const verificaSeEIgual3 = nome2 === nome3 //true


console.log(verificaSeEIgual);
console.log(verificaSeEIgual2);
console.log(verificaSeEIgual3);

if(nome1 === nome2){
    console.log(verificaSeEIgual)
}else {
    console.log('erro')
}