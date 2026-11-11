var http = require('http');

var server = http.createServer(onRequest);

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');