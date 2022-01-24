let reptd_digits = [];

for(let i=1;i<=100;i++){
    
    // In case of repeated digit, if it is divided by 10, both the quotient and remainder will be same 
    if(i%10 == Math.floor(i/10)){
        reptd_digits[reptd_digits.length] = i;
    }
}
console.log("Repeated digits between 0 and 100 are: "+reptd_digits);