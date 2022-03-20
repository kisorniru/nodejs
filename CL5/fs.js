const fs = require('fs');

//  fs example
//  file writing & reading in synchronize way
fs.writeFileSync('myFileSync.txt', 'Hello synchronize programmers! ');
fs.appendFileSync('myFileSync.txt', 'How are you ?');
const syncData = fs.readFileSync('myFileSync.txt');
console.log(syncData.toString());

//  file writing & reading in asynchronous way
const data = 'Hello asynchronous programmers!';
fs.writeFile('myFile.txt', data, (err) => {
    if (err) throw err;
    console.log('The asynchronous file has been saved!');
});
console.log('File asynchronous writing is in progress ...');
fs.readFile('myFile.txt', (err, response) => {
    if (err) throw err;
    console.log(response.toString());
});
console.log('File asynchronous reading is in progress ...');

// More info
//  https://www.w3schools.com/nodejs/ref_modules.asp
//  https://www.youtube.com/watch?v=IUBd76UQb34
//  https://www.youtube.com/watch?v=qImH1bFubW4
