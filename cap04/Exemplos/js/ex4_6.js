const frm = document.querySelector("form")
resp100 = document.querySelector("#out100")
resp50 = document.querySelector("#out50")
resp10 = document.querySelector("#out10")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    if (valor % 10 != 0){
        alert("O valor é inválido")
        frm.inValor.focus()
        return
    }
    const notasCem = Math.floor(valor/100)
    let resto = valor % 100
    const notasCinquenta = Math.floor(resto/50)
    resto = resto % 50
    const notasDez = Math.floor(resto/10)
    if(notasCem>0){
        resp100.innerText = `Notas de R$ 100: ${notasCem}`
        
    }
    if(notasCinquenta>0){
        resp50.innerText = `Notas de R$ 50: ${notasCinquenta}`
        
    }
    if(notasDez>0){
        resp10.innerText = `Notas de R$ 10: ${notasDez}`
        
    }
  

    
})