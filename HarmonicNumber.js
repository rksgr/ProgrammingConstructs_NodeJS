// Program to print the nth harmonic number
const prompt = require("prompt-sync")();
const NUMBER= prompt("Enter the harmonic number to be printed: ");

let harmonic_number = 0;

// compute the value of nth harmonic number
for(let i=1;i<=NUMBER;i++){
    harmonic_number += 1/i;
}
console.log(harmonic_number);