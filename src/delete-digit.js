const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = (n + "").split("");
  let length = array.length;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    array.splice(i, 1);
    result.push(array);

    if (array.length < length) {
      array = (n + "").split("");
    }
  }

  return +result.map((el) => el.join("")).sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit,
};
