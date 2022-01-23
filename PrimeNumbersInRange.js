// Program to take a range of numbers as input and output the prime numbers in that range

const prompt = require("prompt-sync")();
const RANGE_LOWER = prompt("Enter the starting number of the range from where prime numbers are to be displayed: ");
const RANGE_UPPER = prompt("Enter the last number of the range till which prime numbers are to be displayed: ");

// Array to hold prime numbers
const prime_nums = [];

// Find prime numbers in the given range
for(let i=RANGE_LOWER;i<=RANGE_UPPER;i++){
    let num_factors = 0;

    // Check whether given number is prime or not
    for(let j=2;j<=Math.ceil(Math.sqrt(i));j++){
        if (i%j == 0){
            num_factors++;
            break;
        }
    } 

    // If the number has no factor other than 1, it is a prime number
    if(num_factors ==0){
        prime_nums[prime_nums.length] = i;
    }   
}
console.log("The prime numbers in between "+RANGE_LOWER+ " and " + RANGE_UPPER +" are: " +prime_nums);
