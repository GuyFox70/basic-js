const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    this.dir = bool;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error;


  }
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
