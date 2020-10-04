const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(d) {
  if (d == undefined) return 'Unable to determine the time of year!';

  if (isNaN(d.getTime())) throw new Error;

  let season = d.getMonth();

  if (season >= 2 && season <= 4) {
    return 'spring';
  } else if (season >= 5 && season <= 7) {
    return 'summer';
  } else if (season >= 8 && season <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
