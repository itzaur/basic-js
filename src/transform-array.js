const { NotImplementedError } = require("../extensions/index.js");

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
function transform(/*arr*/) {
  throw new NotImplementedError("Not implemented");
  // let cloneArray = structuredClone(arr)
  // const discardNextIndex = arr.indexOf("--discard-next");
  // const discardPrevIndex = arr.indexOf("--discard-prev");
  // const doubleNextIndex = arr.indexOf("--double-next");
  // const doublePrevIndex = arr.indexOf("--double-prev");
  // console.log(discardNextIndex);
  // let result = []
  // // for(let i = 0; i < cloneArray.length; i++) {
  //   arr.splice(discardNextIndex + 1, 1);
  //   arr.splice(doublePrevIndex - 1, 0, arr[doublePrevIndex - 1]);
  //   // arr.splice(doubleNextIndex + 1, 0, arr[doubleNextIndex])
  // // }
  // return arr
}

// console.log((transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]))); //[1, 2, 3, 4, 5]
// console.log(transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5])); //[1, 2, 3, 1337, 1337, 1337, 4, 5]
// console.log(transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])); //[1, 2, 3, 4, 5]
// console.log(transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])); //[1, 2, 3, 1337, 4, 5]

module.exports = {
  transform,
};
