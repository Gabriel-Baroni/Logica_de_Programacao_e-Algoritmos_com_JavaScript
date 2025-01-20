const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e) => {
    const titulo = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const total = Math.floor( preco*2)

    resp.innerText= `Leve 2 por apenas R$ ${total.toFixed(2)}`
    e.preventDefault()
})