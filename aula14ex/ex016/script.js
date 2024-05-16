function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector(`input#fim`)
    let passo = document.querySelector(`input#passo`)
    let res = document.querySelector('div#res')
  
    while (inicio.value <= fim.value) {
        res.innerHTML = `Número ${inicio.value}`
        inicio.value++
    }
}