const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/*names*/) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  // let result = [];
  // let count = 0;

  // for(let i = 0; i < names.length; i++) {
  //   result.push(names[i]);

  //   if(names[i] === names[i + 1]) {
  //     count++
  //     names[i + 1] += `(${count})`
  //   }

  // }

  // return result
}

// console.log(renameFiles(["doc", "doc", "image", "doc(1)", "doc"]), [
//   "doc",
//   "doc(1)",
//   "image",
//   "doc(1)(1)",
//   "doc(2)",
// ]);
// console.log(renameFiles(["a", "b", "cd", "b ", "a(3)"]), [
//   "a",
//   "b",
//   "cd",
//   "b ",
//   "a(3)",
// ]);
// console.log(renameFiles([]), []);

module.exports = {
  renameFiles,
};
