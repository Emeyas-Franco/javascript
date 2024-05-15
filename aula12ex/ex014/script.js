function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    var sec = data.getSeconds()
        
    msg.innerHTML = `Horário de Brasília: ${hora}:${min}:${sec}`
    if(hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#da8651'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#3a2d4b'
    }

}


