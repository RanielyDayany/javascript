let num = document.getElementById('numadd')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <=100){
        return true

    }else{
        return false
    }
}
function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}


function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML =''
        

    }else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value =''
    num.focus() /*serve pro campo que eu quero add o número já estar selecionado,pronto pra receber o valor*/

}


function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')

    }else{
        tot = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / tot
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]

            }


        }
        

        res.innerHTML = `<p>Ao todo,foram digitados ${tot} números.</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        res.innerHTML += `<p>A soma entre os valores é de ${soma} </p>`
        res.innerHTML += `<p>A média entre os valores é de ${media} </p>`
    }
    



}