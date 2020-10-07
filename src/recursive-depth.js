const CustomError = require("../extensions/custom-error");
let i = -1;

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr);

    function calculate(arr) {
      i++;

      for (let elem of arr) {
        if (Array.isArray(elem)) {
          calculate(elem);
        }
      }

      return i;
    }

    return calculate(arr);
  }
};