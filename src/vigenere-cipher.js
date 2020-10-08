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

  getLetters() {
    const obj = {};

    for (let i = 97, j = 0; i < 123; i++, j++) {
      obj[i] = j;
    }

    return obj;
  }
}

module.exports = VigenereCipheringMachine;
