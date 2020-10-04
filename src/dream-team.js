const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  
  const fl = arr.map(elem => {
    if (typeof(elem) == 'string') {
     return elem.trim().substr(0, 1).toUpperCase();
   }
	});

	return fl.sort().join('') || false;
};
