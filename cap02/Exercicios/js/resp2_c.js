const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    const produto = frm.inProduto.value
    const preco = Number(frm.Inpreco.value)
    const terceiro = preco / 2

    const total = (preco*2)+ terceiro

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
    resp2.innerText= `O terceiro custa apenas R$: ${terceiro.toFixed(2)}`
    e.preventDefault()
})