let res = document.getElementById('res')
const botao =document.querySelector('input')
botao.addEventListener('click',()=>{
    let panterior =Number.parseFloat(prompt('Qual era o preço anterior do produto?'))
    let patual = Number.parseFloat(prompt('Qual é o preço atual do produto?'))
    if (panterior < patual){
        let diferenca = patual - panterior
        let porcentagem = (diferenca *100)/panterior
        res.innerHTML=('<h1>Analisando os valores informados...</h1>')
        res.innerHTML+=(`<p>O produto custava ${panterior.toLocaleString("pt-BR",{style:'currency',currency:'BRL'})} e agora custa ${patual.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.</p>`)
        res.innerHTML+=('<p>Hoje o produto está mais caro.</p>')
        res.innerHTML+=(`<p>O preço subiu ${diferenca.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} em relação ao preço anterior.</p>`)
        res.innerHTML+=(`<p>Uma variação de ${porcentagem.toFixed(1)}% pra cima.</p>`)
    }else{
        let diferenca = panterior-patual
        let porcentagem = (diferenca*100)/patual
        res.innerHTML=('<h1>Analisando os valores informados...</h1>')
        res.innerHTML+=(`<p>O produto custava ${panterior.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} e agora custa ${patual.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.</p>`)
        res.innerHTML+=('<p>Hoje o produto está mais barato.</p>')
        res.innerHTML+=(`<p>O preço caiu ${diferenca.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} em relação ao anterior.</p>`)
        res.innerHTML+=(`<p>Uma variação de ${porcentagem.toFixed(2)}% pra baixo.</p>`)
    }
})