const repeatString = function(str,num) {
let s='',mu=0;
while(mu<num){
    s+=str;
    mu++;
}
if(num<0){
return "ERROR"
}
return s;
};

// Do not edit below this line
module.exports = repeatString;
