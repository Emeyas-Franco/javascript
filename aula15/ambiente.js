let num = [1, 2, 3, 4, 5, 6]
 
console.log(`vaga ${num[0]}`) 
num[6] = 10

console.log(`vaga ${num}`)
num.push(7)
console.log(`vaga ${num}`)
console.log(num.length)

for(let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(3))