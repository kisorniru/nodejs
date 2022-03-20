const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello Programmers!');
        response.end();
    } else {
        response.write('Page not found!');
        response.end();
    }
});
server.listen(3000);

const newServer = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Programmers! This is another server!');
        res.end();
    } else {
        res.write('Page not found!');
        res.end();
    }
});
newServer.listen(3030);

console.log('Listening on port 3000');
