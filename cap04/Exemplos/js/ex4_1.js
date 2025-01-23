const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2)/2
    e.preventDefault()
    resp1.innerText = `Média das notas: ${media.toFixed(2)}`

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome} Você foi aprovada`
        resp2.style.color = "blue"
    }
    else if (media >=4){
        resp2.innerText = `Atenção ${nome} você esta de em exame`
        resp2.style.color = "yellow"

    }
    else {
        resp2.innerText = `Ops ${nome} você foi reprovado`
        resp2.style.color ="red"
    }
    })