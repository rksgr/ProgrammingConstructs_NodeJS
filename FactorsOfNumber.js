// compute factors of a number using prime factorization method

prompt = require("prompt-sync")();
let NUM = prompt("Enter the number whose factors have to be found out: ");

// Array to store all the factors of the number
let factors_arr = [1];

// Traverse through loop till the square root of the number
for(let j=2;j <= Math.ceil(Math.sqrt(NUM));j++){
    
    // Both the divisor and quotient are the factors of the dividend
    if(NUM%j == 0){
        factors_arr[factors_arr.length] = j;
        factors_arr[factors_arr.length] = NUM/j;
    }
}

console.log(factors_arr);