const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velocidadePermitida = Number(frm.inVelocidade.value)
    const velocidadeCondutor = Number(frm.inCondutor.value)
    let per = velocidadePermitida * 0.2
    if (velocidadeCondutor <= velocidadePermitida){
        resp.innerText= `Sem multa`
    }
    else if (velocidadeCondutor <= (velocidadePermitida + per)){
        resp.innerText=`Multa Leve`
    }
    else if (velocidadeCondutor > (velocidadePermitida+per)) {
        resp.innerText=`Multa Grave`
    }

})