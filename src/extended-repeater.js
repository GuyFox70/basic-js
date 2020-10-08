const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '' }) {
  if (typeof (str) != 'string' || typeof (addition) != 'string') {
    str = String(str);
    addition = String(addition);
  }

  let newAdditionStr = '';
  let result = '';

  for (let i = 1; i <= additionRepeatTimes; i++) {
    i != additionRepeatTimes ? newAdditionStr = newAdditionStr + (addition + additionSeparator) : newAdditionStr = newAdditionStr + addition;
  }

  for (let j = 1; j <= repeatTimes; j++) {
    j != repeatTimes ? result = result + (str + newAdditionStr) + separator : result = result + (str + newAdditionStr);
  }

  return result;
};
