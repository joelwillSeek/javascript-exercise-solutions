const fibonacci = function (position) {
  if (position < 0) return "OOPS";
  let posInt = parseInt(position);
  return fibonacciFormula(posInt);
};

const fibonacciFormula = (pos) => {
  if (pos == 1 || pos == 0) {
    return pos;
  }
  return fibonacciFormula(pos - 1) + fibonacciFormula(pos - 2);
};

// Do not edit below this line
module.exports = fibonacci;
