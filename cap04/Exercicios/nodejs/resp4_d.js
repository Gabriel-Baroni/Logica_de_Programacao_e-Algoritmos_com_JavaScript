const prompt = require("prompt-sync")()
const lado1 = Number(prompt("Digite o valor do lado 1:"))
const lado2 = Number(prompt("Digite o valor do lado 2:"))
const lado3 = Number(prompt("Digite o valor do lado 3:"))
if(lado1 > (lado2+lado3) || lado2>(lado1+lado3) || lado3>(lado1+lado2)){
    console.log("Não é possível formar um triângulo")
}
else if(lado1==lado2 && lado3==lado2){
    console.log("Triângulo Equilátero")
}

else if((lado1==lado2 || lado1 == lado3 ||lado2 == lado3) && (lado1!= lado2 || lado2!= lado3 || lado1!=lado3) ){
    console.log("Triângulo Isósceles")
}
else{
    console.log("Triângulo Escaleno")
}