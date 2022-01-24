/**
 * (a) Roll a die and find the number between 1 and 6
 */
function rollDie(){
    let die_roll = Math.ceil(Math.random()*6);
    //console.log(die_roll);
    return die_roll;
}

/**
 * (b) Repeat the die roll and find the result each time
 */
function repeatDieRoll(){
    let die_roll = rollDie();
    let die_roll_rept = [];
    for(let i=0;i<10;i++){
        die_roll = rollDie();
        console.log(die_roll)
    }
}
repeatDieRoll();
/**
 * (c) Store the result in a dictionary
 */
function storeDieRollResultDict(){
    let dieRollMap = new Map();
    for(let i=0;i<10;i++){
        dieRollMap.set(i,rollDie());
    }
    return dieRollMap;
}
console.log(storeDieRollResultDict());
