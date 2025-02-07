let num =[5,8,4]
console.log(num)
console.log(`O comprimento do vetor é ${num.length}`)
console.log(`Exibindo o elemento da primeira posição ${num[0]}`)
num[3]=6 //adicionando o número 6 na posição 3 do meu vetor
console.log(`Adicionei o número ${num[3]} na posição 3 do vetor`)
console.log(num)
num.push(2) //adicionando o número 2 na última posição do vetor
console.log(`Adicionei o número 2 na última posição do meu vetor`)
console.log(`Colocando os números em ordem ${num.sort()}`)
posicao = num.indexOf(4)
if(posicao == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${posicao}`)
}


/*Mostrando o vetor na tela de forma personalizada:
for (let pos = 0 ;pos < num.length;pos++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
//Simplificando ainda mais:
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}



