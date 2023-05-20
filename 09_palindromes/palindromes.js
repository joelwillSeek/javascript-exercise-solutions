/**
 *
 * @param {String} str
 */
const palindromes = function (strUp) {
  //compare first and second until reach mid
  //if special character then skip to next character
  let first = 0;
  let last = strUp.length - 1;
  let str = strUp.toLowerCase();

  while (last > first) {
    if (
      str[last] == "." ||
      str[last] == "!" ||
      str[last] == " " ||
      str[last] == ","
    ) {
      last--;
    } else if (str[first] == " " || str[first] == ",") {
      first++;
    } else {
      if (str[first++] != str[last--]) {
        return false;
        //return `${str[--first]} and ${str[++last]}`;
      }
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
