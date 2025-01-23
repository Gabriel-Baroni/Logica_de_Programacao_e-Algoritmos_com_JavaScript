const prompt = require("prompt-sync")()
const veiculo= prompt("Nome do veículo:")
const preco = Number(prompt("Preço do veículo:"))
const entrada = preco * 0.5
const parcela =  entrada/12
console.log(`Promoção ${veiculo}`)
console.log(`Entrada de R$ ${entrada}`)
console.log(`+ 12x de R$ ${parcela}`)