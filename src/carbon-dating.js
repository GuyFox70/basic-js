const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);

  Math.floor(Math.log(15 / num) / (0.693 / 5730))
};

// console.log(Math.ceil(Math.log(15 / 9.122605776326203) / (0.693 / 5730)));
// console.log(Math.floor(Math.log(15 / 9.122605776326203) / (0.693 / 5730)));