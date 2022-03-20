const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name = message /></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream finished!');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // res.write(`${parsedBody}`);
            // res.end();
        });
        res.write('Thank you for submitting! Here is your submitted text.');
        res.end();
    } else {
        res.write('Page Not Found!');
        res.end();
    }
}).listen(3000);

console.log('Listening on port 3000');
