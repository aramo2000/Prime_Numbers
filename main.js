const reader = require('readline-sync')
let n = reader.questionInt("Input the smallest number of your range = ")
let m = reader.questionInt("Input the largest number of your range = ")
while(m<n) {
    console.log("It's a range, write it right")
    n = reader.questionInt("Input the smallest number of your range = ")
    m = reader.questionInt("Input the largest number of your range = ")
}
let primes = []
for( let x=n ; x<=m ; x++) {
    const util = require("./myUtils.js");
    
    if(util.isPrime(x)) {
        primes.push(x)
    }
}
console.log(primes)

