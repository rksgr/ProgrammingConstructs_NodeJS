const nums = [];
// Generate five random 3 digit numbers
while(nums.length<5){
    let temp = Math.floor(Math.random()*1000)
    if(temp > 100){
        nums[nums.length] = temp;
    }
}

// Find the maximum of the 5 numbers
if((nums[0]>nums[1])&& (nums[0]> nums[2]) &&(nums[0]>nums[3]) &&(nums[0]> nums[4])){
    console.log("largest random number out of 5 given numbers is: "+ nums[0]);
}
else if((nums[1] > nums[2]) &&(nums[1] > nums[3]) &&(nums[1] > nums[4])){
    console.log("largest random number out of 5 given numbers is: "+ nums[1]);
} 
else if((nums[2] > nums[3]) && (nums[2] > num5)){
    console.log("largest random number out of 5 given numbers is:" + nums[2]);
}
else if(nums[3] > nums[4]){
    console.log("largest random number out of 5 given numbers is:"+ nums[3]);
}else{
    console.log("Largest raandom number out of 5 given numbers is :" + nums[4]);
}

// Find the minimum of the five numbers
if((nums[0] < nums[1])&& (nums[0]< nums[2]) &&(nums[0]< nums[3]) &&(nums[0]< nums[4])){
    console.log("Smallest random number out of 5 given numbers is: "+ nums[0]);
}
else if((nums[1] < nums[2]) &&(nums[1] < nums[3]) &&(nums[1] < nums[4])){
    console.log("Smallest random number out of 5 given numbers is: "+ nums[1]);
} 
else if((nums[2]< nums[3]) && (nums[2] < nums[4])){
    console.log("Smallest random number out of 5 given numbers is:" + nums[2]);
}
else if(nums[3] < nums[4]){
    console.log("Smallest random number out of 5 given numbers is:"+ nums[3]);
}else{
    console.log("Smallest raandom number out of 5 given numbers is :" + nums[4]);
}