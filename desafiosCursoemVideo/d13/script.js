const botao = document.getElementById("botao")
const res = document.getElementById("res")
botao.addEventListener("click",(evt)=>{
   let aluno=prompt("Qual o nome do aluno?")
   let primeiraNota =Number.parseFloat(prompt(`Primeira nota de ${aluno}:`))
   let segundaNota = Number.parseFloat(prompt(`Segunda nota de ${aluno}:`))
   let media=(primeiraNota+segundaNota)/2
   let m = ""
   let situacao = ""
   let classe =""
   if(media < 3){
        m = "abaixo de 3,0"
        situacao = "Reprovado"
        classe ="vermelho"

    }else if(media <= 6){
        m = "entre 3,0 e 6,0"
        situacao = " em Recuperação"
        classe ="amarelo"
    }else{
        m = "acima de 6,0"
        situacao = "Aprovado"
        classe = "verde"
    }
    res.innerHTML=`<h1>Analisando a situação de ${aluno}</h1>`
    res.innerHTML+=`<p>Com as notas ${primeiraNota} e ${segundaNota}, a média é <strong>${media}</strong></p>`
    res.innerHTML+=`<p>Com media ${m} ,o aluno está <mark class="${classe}">${situacao}</p>`

})



