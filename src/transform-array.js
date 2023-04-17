// const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }

  return arr.flatMap((item, index, arr) => {
    console.log(item);
    if (arr.length === 0) return [];

    if (
      arr[index - 1] === "--discard-next" ||
      arr[index + 1] === "--discard-prev"
    )
      return [];

    if (
      arr[index - 1] === "--double-next" ||
      arr[index + 1] === "--double-prev"
    )
      return [item, item];

    if ((item + "").includes("--")) return [];

    return item;
  });
}

module.exports = {
  transform,
};
