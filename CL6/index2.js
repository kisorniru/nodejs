const http = require('http');
const fs = require('fs');

//  'req' is a writeAbleStream
//  'res is a writeAbleStream
http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myReadStream.pipe(res);
}).listen(3000);

console.log('listening on port 3000');
