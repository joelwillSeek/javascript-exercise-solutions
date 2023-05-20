const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};
/**
 * 
 * @param {Array} arrayNum 
 */
const sum = function(arrayNum) {
	let sum=0;
  for(let i=0;i<arrayNum.length;i++){
    sum+=arrayNum[i];
  }
  return sum;
};

const multiply = function(arrayNum) {
  let multiply=1;
  for(let i=0;i<arrayNum.length;i++){
    multiply*=arrayNum[i];
  }
  
  return multiply;
};

const power = function(num1,num2) {
	let pow=1;
  for(i=1;i<=num2;i++){
    pow*=num1;
  }
  return pow;
};

const factorial = function(num) {
	let fac=num;
  if(num==0){
    return 1;
  }
  for(i=num-1;i>0;i--){
      fac*=i;
    }
    return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
