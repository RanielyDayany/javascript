function verificar(){
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')

    }else{
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','imagens/bebeM.png')

            }else if (idade < 21){
                img.setAttribute('src','imagens/jovemM.png')

            }else if(idade < 50){
                img.setAttribute('src','imagens/homem.png')
            }else{
                img.setAttribute('src','imagens/idoso.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','imagens/bebeF.png')

            }else if (idade < 21){
                img.setAttribute('src','imagens/jovemF.png')

            }else if(idade < 50){
                img.setAttribute('src','imagens/mulher.png')

            }else{
                img.setAttribute('src','imagens/idosa.png')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com idade de ${idade}`
        
    }

}