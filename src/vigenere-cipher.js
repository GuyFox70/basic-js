const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    this.dir = bool;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error;

    let result = [];

    let text = this._getOrdinalNumberLetters(message);
    let textKey = this._getOrdinalNumberLetters(this._getKeyEqString(message, key));
    let objKeysForUnicodeToLetters = this._getObjOrdinalNumberKeys();

    for (let i = 0; i < text.length; i++) {
      if (typeof (text[i]) == 'number') {
        let total = text[i] + textKey[i];

        if (total >= 26) {
          total = total - 26;
        }

        result.push(String.fromCodePoint(objKeysForUnicodeToLetters[total]));
      } else {
        result.push(text[i]);
      }
    }

    return this.dir === false ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error;

    let result = [];

    let text = this._getOrdinalNumberLetters(message);
    let textKey = this._getOrdinalNumberLetters(this._getKeyEqString(message, key));
    let objKeysForUnicodeToLetters = this._getObjOrdinalNumberKeys();

    for (let i = 0; i < text.length; i++) {
      if (typeof (text[i]) == 'number') {
        let total = text[i] - textKey[i];

        if (total < 0) {
          total = (26 + text[i]) - textKey[i];
        }

        result.push(String.fromCodePoint(objKeysForUnicodeToLetters[total]));
      } else {
        result.push(text[i]);
      }
    }

    return this.dir === false ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }

  _getObjUnicodeKeys() {
    const obj = {};

    for (let i = 97, j = 0; i < 123; i++, j++) {
      obj[i] = j;
    }

    return obj;
  }

  _getObjOrdinalNumberKeys() {
    const obj = {};

    for (let i = 97, j = 0; i < 123; i++, j++) {
      obj[j] = i;
    }

    return obj;
  }

  _getKeyEqString(str, key) {
    let newKey = '';

    str = str.toLowerCase();
    key = key.toLowerCase();

    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (str[i] == ' ' || str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
        newKey = newKey + str[i];
        j--;
      } else {
        newKey = newKey + key[j];
      }

      if (j == key.length - 1) {
        j = -1;
      }

    }

    return newKey;
  }

  _getOrdinalNumberLetters(str) {
    let instance = this._getObjUnicodeKeys();
    let result = [];

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ' || str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
        result.push(str[i]);
      } else {
        result.push(instance[str.charCodeAt(i)]);
      }
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
