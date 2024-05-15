function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert(`Verifique os dados e tente novamente!`)
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement(`img`)
        img.setAttribute(`id`, `img`)
        if (fsex[0].checked){
            genero = `Homem`
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-crianca-m.png') // Criança
            } else if ( idade < 23) {
                img.setAttribute('src', `foto-jovem-m.png`) // Jovem
            } else if ( idade < 50) {
                img.setAttribute('src', `foto-adulto-m.png`) // Adulto
            } else {
                img.setAttribute('src', `foto-idoso-m.png`) // Idoso
            }
        } else if (fsex[1].checked){
            genero = `Mulher`
            if (idade >= 0 && idade < 10) {
                img.setAttribute(`src`, `foto-crianca-f.png`) // Criança
            } else if ( idade < 23) {
                img.setAttribute(`src`, `foto-jovem-f.png`) // Jovem
            } else if ( idade < 50) {
                img.setAttribute(`src`, `foto-adulto-f.png`) // Adulto
            } else {
                img.setAttribute(`src`, `foto-idoso-f.png`) // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}