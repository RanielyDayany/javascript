function contar(){
    inicio = document.getElementById('txti')
    fim = document.getElementById('txtf')
    passo = document.getElementById('txtp')
    res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert ('[ERRO]Faltam dados!')

    } else {
        res.innerHTML = 'Contando..'
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(i < f){
            for(var c = i;c <= f ;c +=p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{
            for(var c = i;c >= f;c -=p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }
          
    }
    res.innerHTML += ` \u{1F3C1}`

}
