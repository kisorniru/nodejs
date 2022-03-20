const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourReadStream1 = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
// const ourReadStream2 = fs.createReadStream(`${__dirname}/bigdata.txt`);

// listen "data" event, "data" event is a build in event for createReadStream
// and "chunk" param is mainly a variable for response
ourReadStream.on('data', (chunk) => {
    console.log(chunk);
});

console.log('Hello World!');

// listen "data" event, "data" event is a build in event for createReadStream
// and "chunk" param is mainly a variable for response
// ourReadStream1.on('data', (chunk) => {
//     console.log(chunk);
// });

console.log('Hello World!');

// ourReadStream2.on('data', (chunk) => {
//     console.log(chunk.toString());
// });
