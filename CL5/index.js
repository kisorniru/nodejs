const _ = require('lodash');
const path = require('path');
const os = require('os');
const fs = require('fs');

// More info
//  https://www.w3schools.com/nodejs/ref_modules.asp
//  https://www.youtube.com/watch?v=IUBd76UQb34
//  https://www.youtube.com/watch?v=qImH1bFubW4

//  fs example
//  file writing & reading in synchronize way
fs.writeFileSync('myFileSync.txt', 'Hello programmers!');
fs.appendFileSync('myFileSync.txt', 'How are you ?');
const syncData = fs.readFileSync('myFileSync.txt');
console.log(syncData.toString());

//  file writing & reading in asynchronous way
const data = 'Hello asynchronous!';
fs.writeFile('myFile.txt', data, (err) => {
    if (err) throw err;
    console.log('The File has been saved!');
});
console.log('File writing is in progress ...');
fs.readFile('myFile.txt', (err, response) => {
    if (err) throw err;
    console.log(response.toString());
});
console.log('File reading is in progress ...');

//  os example
console.log(os.platform());
console.log(os.release());
console.log(os.version());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.type());

// path example
const myPath = 'C:/wamp64/www/html/LWS/nodeJs/index.js';
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath));
