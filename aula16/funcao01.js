function parimp(n){
    if(n%2==0){
        return `par!`
    } else {
        return `impar!`
    }
}
let res = parimp(11)

console.log(`O número 11 é ${res}`)