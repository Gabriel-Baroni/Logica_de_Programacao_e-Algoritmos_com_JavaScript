const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const raiz = Math.sqrt(frm.inNumero.value)
    if (Number.isInteger(raiz))
        resp.innerText = `A raiz é: ${raiz}`
    else{
        resp.innerText = `A raiz não é exata`
    }
})