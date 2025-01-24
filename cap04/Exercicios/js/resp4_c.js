const frm = document.querySelector("form")
const respTempo = document.querySelector("#outTempo")
const respTroco = document.querySelector("#outTroco")
let valorTroco
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    if (valor < 1 ){
        respTempo.innerText=`Valor inválido`
    }
    else if (valor == 1){
        valorTroco = 0
        respTempo.innerText=`Tempo 30 min`
        respTroco.innerText=`Troco R$ ${valorTroco.toFixed(2)}`

    }
    else if (valor >1 && valor <3){
        valorTroco = valor - 1.75
        respTempo.innerText=`Tempo 60 min`
        respTroco.innerText=`Troco R$ ${valorTroco.toFixed(2)}`
        
    }
    else if (valor==3){
        valorTroco = valor - 3.00
        respTempo.innerText=`Tempo 120 min`
        respTroco.innerText=`Troco R$ ${valorTroco.toFixed(2)}`
        
    }
    else {
        respTempo.innerText = "Valor excede o máximo aceito"
        respTroco.innerText = "" 
    }
    
 
})
