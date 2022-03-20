const path = require('path');

// path example
const myPath = 'C:/wamp64/www/html/LWS/nodeJs/index.js';
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath));
