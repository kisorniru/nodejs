const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello Programmers!');
        response.write('How are you doing?');
        response.end();
    } else if (request.url === '/about-us') {
        response.write('This is about us page.');
        response.end();
    } else {
        response.write('Page not found!');
        response.end();
    }
});

// server.on('connection', () => {
//     console.log('New Connection!');
// });

server.listen(3000);

console.log('Listening on port 3000');
