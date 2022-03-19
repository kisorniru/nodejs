/*
 * Title: Math Library
 * Description: Utility library for math-related functions.
 * Author: Noor-A-Alam Siddique
 * Date: 20/03/2022
 */

// Math object - Module scaffolding
const math = {};

//  Get a random number integer between two integers
//  Inspired by: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

//  Export the library
module.exports = math;
