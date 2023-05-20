const convertToCelsius = function(f) {
  let answer=(f-32)*0.5556;
  if(answer%1!=0){
    return parseFloat(answer.toFixed(1));
  }
  return answer;
};

const convertToFahrenheit = function(c) {
  let answer=(c*1.8)+32;
  if(answer%1!=0){
    return parseFloat(answer.toFixed(1));
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
