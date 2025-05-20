const soma=document.getElementById("soma")
const subtracao=document.getElementById("subtracao")
const multiplicacao=document.getElementById("multiplicacao")
const divisao=document.getElementById("divisao")
const res=document.querySelector("#res")

const op=[
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])+Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])-Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])*Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])/Number(val[1])
    }
]
soma.addEventListener("click",op[0])
subtracao.addEventListener("click",op[1])
multiplicacao.addEventListener("click",op[2])
divisao.addEventListener("click",op[3])





        






