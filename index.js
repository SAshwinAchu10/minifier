'use strict';

/**
 * Adds commas to a number
 * @param {string} amPmString
 * @return {string}
 */

module.exports.to24HourFormat = function(amPmString) {
    var d = new Date("1/1/2013 " + amPmString);
    return d.getHours() + ':' + d.getMinutes();
};