const prompt = require("prompt-sync")()
const salario = Number(prompt("Digite o salário do funcionário (R$):"))
const tempo = Number(prompt("Digite o tempo de serviço do funionário (anos):"))
const quadrienios = Math.floor(tempo/4)
const aumento = (quadrienios * 0.01) * salario 
console.log (`Quadrienios: ${quadrienios}`)
console.log (`Salário final: R$ ${(aumento+salario).toFixed(2)}`)