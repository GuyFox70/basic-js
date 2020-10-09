const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!/^\d+$/.test(sampleActivity) || sampleActivity == undefined || +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY || typeof (sampleActivity) != 'string') return false;

  return (Math.log(15 / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)).toFixed(0);
};