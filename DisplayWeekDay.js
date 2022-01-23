// Read a number and display the week day

const prompt = require("prompt-sync")();
let num = prompt("Enter a number between 1 and 7: ");

// Display weekday corresponding to number entered
if (num == 1){
    console.log("Sunday");
}
else if(num == 2){
    console.log("Monday");
}
else if(num == 3){
    console.log("Tuesday");
}
else if(num == 4){
    console.log("Wednesday");
}
else if(num == 5){
    console.log("Thursday");
}
else if(num == 6){
    console.log("Friday");
}
else if(num == 7){
    console.log("Saturday");
}