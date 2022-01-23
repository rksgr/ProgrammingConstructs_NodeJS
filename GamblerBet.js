// Program where a gambler starts with Rs 100 and places Re 1 bet 
// until he goes broke or reaches the goal of Rs 200.

const INIT_AMOUNT = 100;
const GOAL_AMOUNT = 200;
const BROKE_AMOUNT = 0;
const BET_AMOUNT = 1;

let no_of_times_won = 0;
let no_bets_made = 0;
let present_amount = INIT_AMOUNT;

// Bet till goal amount is reached or the gambler goes broke
while((present_amount<GOAL_AMOUNT) && (present_amount>BROKE_AMOUNT)){
    no_bets_made++;

    // Gambler is considered to win the bet
    //if random number generated is more than 0.5
    if(Math.random() >= 0.5){
        present_amount += BET_AMOUNT;
        no_of_times_won++;
    }else if(Math.random() < 0.5){
        present_amount -= BET_AMOUNT;
    }
}
console.log("Number of times won: "+ no_of_times_won);
console.log("Number of bets made: "+ no_bets_made);
