// Program takes day and month from the command line and prints true if day of month is between 
// March 20 and June 20, false otherwise.


const prompt = require("prompt-sync")();

const date_prompt = prompt("Enter a date in yyyy/mm/dd format: ");
date_entered = new Date(date_prompt);
let date_in_between = false;
const init_date = new Date("2020/03/20");
const fin_date = new Date("2020/06/20");


if ((date_entered > init_date) 
        && (date_entered < fin_date)){
    date_in_between = true;
    console.log(date_in_between);
}else if((date_entered <init_date) 
            | (date_entered >fin_date)){
                date_in_between = false;
                console.log(date_in_between);
            }
return 0;
