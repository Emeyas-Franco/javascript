function contar() {
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector(`input#txtf`)
    let passo = document.querySelector(`input#txtp`)
    let res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar`
    } else {
        res.innerHTML = `<p>Contando</p>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regressiva 
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}