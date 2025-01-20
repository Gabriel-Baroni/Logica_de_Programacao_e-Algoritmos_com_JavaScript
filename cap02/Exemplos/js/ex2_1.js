//cria referencia ao from e ao elemento h3 
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//crie um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value //obtém o nome digitado no from
    resp.innerText = `Olá ${nome}`//exibe a resposta do programa
    e.preventDefault() //evita envio do form 
})

