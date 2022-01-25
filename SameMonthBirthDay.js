// Program to generate a birth month of 50 individuals between years 92 and 93.
// Find all individuals having birth in same month.

const NO_OF_INDIVIDUALS = 50;
let date_strt = new Date("1992/01/01");
let date_end = new Date("1993/12/31");

let same_month_birth= new Map();
for(let i=0;i<NO_OF_INDIVIDUALS;i++){
    let date = new Date(date_strt.getTime()+ Math.random()*(date_end.getTime()-date_strt.getTime()));
    let birth_month = date.getMonth();
    if(same_month_birth.has(birth_month)){
        let val = same_month_birth.get(birth_month);
        same_month_birth.set(birth_month,val+1);
    }else{
        same_month_birth.set(birth_month,1);
    }
}
console.log("Number of individuals having birth in the same month: "+same_month_birth);