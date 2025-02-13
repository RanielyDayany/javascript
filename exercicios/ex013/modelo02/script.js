function calcular(){
    numero = document.getElementById('txtn')
    tab = document.getElementById('seltab')

    if (numero.value.length == 0){
        alert('Por favor,digite um número!')

    }else{
        n = Number(numero.value)
        c = 1
        tab.innerHTML =''
        
        while(c <= 10){
            item = document.createElement('option')
            item.text = `${n} x ${c}=${n*c} `
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }
 
}
