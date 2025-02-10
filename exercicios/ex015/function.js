//Function pra testar se um número é par ou ímpar

function parimp(n){
    if (n % 2 ==0){
        return `O número ${n} é par! `
    }else{
        return `O número ${n} é ímpar!`
    }
}
console.log ((parimp(8)))

//Function pra somar dois números

function soma(n1 =0,n2=0){
    return `A soma entre ${n1} e ${n2} é ${n1 + n2}`
}
console.log(soma(5 , 8))

/*Colocando o n1 e n2 iguais a zero eu estou dizendo que se por acaso só for passado 
um número como parâmetro o programa irá somar o número com 0,se eu não fizer isso o meu resultado será Nan.*/
