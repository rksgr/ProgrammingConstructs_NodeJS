// Compute factorial of a number taken as input

const prompt = require("prompt-sync")();
const NUMBER = prompt("Enter the number whose factorial is to be calculated: ");

let factorial = 1;
for (let i=1;i<=NUMBER;i++){
     factorial = factorial * i;
}
console.log("Factorial of "+ NUMBER +" = " + factorial);