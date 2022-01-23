// Print the table of the powers of 2

const prompt = require("prompt-sync")();

let prompt_entered = prompt("Enter the power of 2: ");

for (let i=0;i<=prompt_entered;i++){
    console.log(2**i);
}
