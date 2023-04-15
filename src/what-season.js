const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const seasons = {
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
    winter: [12, 1, 2],
  };

  if (typeof date === "undefined")
    return "Unable to determine the time of year!";
  if (
    date === null ||
    typeof date !== "object" ||
    Array.isArray(date) ||
    Object.keys(date).length
  )
    throw new Error("Invalid date!");

  const month = new Date(date).getMonth() + 1;

  return Object.keys(seasons).find((el) => seasons[el].includes(month));
}

module.exports = {
  getSeason,
};
