const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array - fix "deoth"
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr) && arr.length) {
      return Math.max(0, ...arr.map((el) => this.calculateDepth(el))) + 1;
    } else if (Array.isArray(arr) && !arr.length) {
      return 1;
    } else {
      return 0;
    }
  }
}

// const instance = new DepthCalculator();
// const calculateDepth = instance.calculateDepth.bind(instance);

module.exports = {
  DepthCalculator,
};
