let n = 0
let max = 100
pares = 0
//Break
while (n < max){
    console.log(n)
    n++
    if(n > 20){
        break
    }
}

//Continue
for (let i=n;i< max;i++){
    if(i%2 != 0){
        continue
    }
    pares++
}
console.log("Pares" +pares)