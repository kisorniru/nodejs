/*
 * Title: handle Request Response
 * Description: handle Request and Response
 * Author: Noor-A-Alam Siddique
 * Date: 20/03/2022
 */
// dependencies
const url = require('url');
const { stringDecoder, StringDecoder } = require('string_decoder');

// modele scaffolding
const handler = {};

// handle Request Response
handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('Hello World!');
    });

    // response handle
    // res.end('Hello Dhaka!');
};
// Export module
module.exports = handler;
