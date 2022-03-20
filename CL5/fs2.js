const fs = require('fs');

//  file writing & reading in synchronize way
fs.writeFileSync('myFileSync2.txt', 'Hello synchronize programmer! ');
fs.appendFileSync('myFileSync2.txt', 'How are you ?');
const data = fs.readFileSync('myFileSync2.txt');
console.log(data.toString());

//  file writing & reading in asynchronous way
const asyncWriteData = 'Hello asynchronous programmer!  ';
fs.writeFile('myFileAsync2.txt', asyncWriteData, (err) => {
    if (err) throw err.message;
    console.log('Asynchronous file writing is done. You can read now.');
});
console.log('Asynchronous file is writing ...');

const asyncAppendData = 'How are you ?';
fs.appendFile('myFileAsync2.txt', asyncAppendData, (err) => {
    if (err) throw err.message;
    console.log('Asynchronous file appending is done. You can read now.');
});
console.log('Asynchronous file is appending ...');

fs.readFile('myFileAsync2.txt', (err, asyncReadData) => {
    if (err) throw err.message;
    console.log(asyncReadData.toString());
});
console.log('Asynchronous file is reading ...');

// More info
//  https://www.w3schools.com/nodejs/ref_modules.asp
//  https://www.youtube.com/watch?v=IUBd76UQb34
//  https://www.youtube.com/watch?v=qImH1bFubW4
