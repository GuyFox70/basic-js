const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let sum = 0;

	arr.forEach(elems => {
	
		for (let elem of elems) {
			if (elem == '^^') {
				sum++;
			}
		}
	});

	return sum;
};
