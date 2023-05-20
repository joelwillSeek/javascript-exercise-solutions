const leapYears = function(leapYears) {
//divisible by 4 and 400
//divisible by 100 not

if(leapYears%100!=0&&leapYears%4==0 || leapYears%400==0){
    return true;
}else{
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
