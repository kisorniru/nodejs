//  IIFE [Immediately Invoked Function Expression] concept of vanilla javascript
//  This concept is used in the background of  nodeJs module system

// (function (exports, require, module, __filename, __dirname) {
const people = ['sakib', 'tamim', 'mashrafe'];
const a = 6;
function test() {
    console.log('test');
}

module.exports = {
    people,
    a,
    test,
};
// return module.exports;
// });
