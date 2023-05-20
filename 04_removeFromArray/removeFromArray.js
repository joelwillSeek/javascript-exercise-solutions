/**
 * 
 * @param {Array} numArray 
 * @param {Number} removeNum 
 */

const removeFromArray = function(numArray){
    let parameterLength=arguments.length-1;
    while(parameterLength>=0){
    for(let i = 0; i < numArray.length; i++){
       if(arguments[parameterLength]===numArray[i])
        numArray.splice(i, 1)
    }
    parameterLength--;
}
    return numArray
}
// Do not edit below this line
module.exports = removeFromArray;
