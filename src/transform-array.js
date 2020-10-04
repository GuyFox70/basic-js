const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;

	const duplicate = [...arr];

	for (let i = 0; i < duplicate.length; i++) {
		if (duplicate[i] == '--discard-next') {

			if (i + 1 >= duplicate.length) {
				duplicate.splice(i, 1);
			} else {
				duplicate.splice(i + 1, 1);
			}

		} else if (duplicate[i] == '--double-prev'){

			if (i - 1 < 0) {
				duplicate.splice(i, 1);
			} else {
				duplicate.copyWithin(i, i - 1, i);
			}

		} else if (duplicate[i] == '--double-next') {

			if (i + 1 >= arr.length) {
				duplicate.splice(i, 1);
			} else {
				duplicate.copyWithin(i, i + 1, i + 2);
			}

		} else if (duplicate[i] == '--discard-prev') {

			if (i - 1 < 0) {
				duplicate.splice(i, 1);	
			} else {
				duplicate.copyWithin(i - 1, i, i + 1);
			}
		}
	}

	return duplicate.filter(elem => !/^--[a-z]+-[a-z]+$/g.test(elem));
};
