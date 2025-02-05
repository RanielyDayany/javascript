function carregar(){
    msg = window.document.getElementById('msg')
    img = window.document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 6 && hora <  12 ){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#f7d58e'
        msg.innerHTML +='<p>Bom Dia!</p>'

    }else if (hora >=12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#cb8b71'
        msg.innerHTML += '<p>Boa tarde!</p>'

    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#131826'
        msg.innerHTML += '<p>Boa noite!</p>'
}
}