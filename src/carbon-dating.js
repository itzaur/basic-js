const { NotImplementedError } = require("../extensions/index.js");

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const RADIOACTIVE_DECAY_CONSTANT = Math.log(2) / HALF_LIFE_PERIOD;

  const result = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) / RADIOACTIVE_DECAY_CONSTANT
  );

  return typeof sampleActivity === "string" &&
    sampleActivity > 0 &&
    sampleActivity < MODERN_ACTIVITY
    ? result
    : false;
}

module.exports = {
  dateSample,
};
