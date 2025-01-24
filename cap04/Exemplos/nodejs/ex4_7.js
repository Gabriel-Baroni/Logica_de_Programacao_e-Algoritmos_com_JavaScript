const prompt = require('prompt-sync')()
const pessoas = Number(prompt("Número de pessoas:"))
const peixes = Number(prompt("Número de peixes:"))
let pagar
if (peixes > pessoas){
    pagar = ((peixes-pessoas)*12 + pessoas*20)
}
else{
    pagar = pessoas*20
}
console.log(`O valor a pagar é R$ ${pagar.toFixed(2)}`)