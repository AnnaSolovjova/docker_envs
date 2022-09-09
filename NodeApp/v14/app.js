// This is sample code and can be substituted for the needs of the user
 console.log(`!Hello world`);
 
const http = require("http");
const host = 'localhost';
const port = 8060;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Hello world`);
});