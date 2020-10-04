const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [],

  getLength() {
   return this.chains.length;
  },
  addLink(value) {
  	value === undefined ? this.chains.push(`()`) : this.chains.push(`( ${value} )`);

  	return this;
  },
  removeLink(position) {
  	if (!(typeof position === 'number' && !isNaN(position)) || !Number.isInteger(position) || 1 > position || position > this.chains.length) {
  		this.chains = [];

  		throw new Error;
  	}
 
  	this.chains.splice(position - 1, 1);

  	return this;  
  },
  reverseChain() {
   this.chains.reverse();

   return this;
  },
  finishChain() {
  	let result = this.chains.join('~~');
  	this.chains = [];

    return result;
  }
};

module.exports = chainMaker;
