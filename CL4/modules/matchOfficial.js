//  IIFE [Immediately Invoked Function Expression] concept of vanilla javascript
//  This concept is used in the background of  nodeJs module system

// (function (exports, require, module, __filename, __dirname) {
const people = ['papon', 'nannu', 'mahmud'];
const a = 9;

module.exports = {
    people,
    a,
};
// return module.exports;
// });
