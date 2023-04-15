const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum;
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let q = i + 1; q < matrix.length; q++) {
          matrix[q][j] = 0;
        }
      } else {
        sum += matrix[i][j];
      }
    }

    result.push(sum);
  }

  return result.length ? result.reduce((acc, el) => acc + el, 0) : 0;
}

module.exports = {
  getMatrixElementsSum,
};
