var http = require('http');
var fs = require('fs');

var server = http.createServer(onRequest);

function onRequest(request, response) {

    if (request.method == 'GET' && request.url == '/') {

        response.writeHead(200, {"Content-Type": "text/html"});

        fs.createReadStream("./index.html").pipe(response);

    } else {

        send404Response(request, response);

    }
}

function send404Response(request, response) {

    response.writeHead(404, {"Content-Type": "text/plain"});

    response.write("Error 404: Page not found.");

    response.end();
}

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');