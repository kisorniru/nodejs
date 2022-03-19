const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/pipe.txt`);

ourReadStream.pipe(ourWriteStream);
