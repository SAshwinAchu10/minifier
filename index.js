'use strict';

/**
 * Adds commas to a number
 * @param {string} amPmString
 * @return {string}
 */

module.exports = function to24HourFormat(amPmString, callback) {
    return new Promise((resolve, reject) => {
      if (amPmString === null) {
        reject('error')
        return callback('error')
      } else {
        var d = new Date("1/1/2013 " + amPmString);
        resolve(d.getHours() + ':' + d.getMinutes())
        return callback(null, d.getHours() + ':' + d.getMinutes())
      }
    })
  }