const CustomError = require("../extensions/custom-error");
let i = 1;

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = arr.filter(elem => {
      if (Array.isArray(elem)) {

        if (elem.length === 0) {
          elem.push(1);
          return elem;
        } else {
          return elem;
        }

      }
    }).flat();
    
    if (result.length != 0) {
      i++;
      return this.calculateDepth(result);
    } else {
      let t = i;
      i = 1;
      return t;
    }
  }  
};