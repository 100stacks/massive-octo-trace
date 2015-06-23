//
//    ATX Hack For Change Hackathon 

// http server
var http = require('http');
var filesystem = require('fs');

// creating a server
server = http.createServer(function (request, response) {
			response.writeHead(200, {'Content-type': 'text/html'});
			console.log('Request url: ', request.url);

			if (request.url === "/") {
				filesystem.readFile('app/index.html', 'utf8', function(errors, contents) {
					response.write(contents);
					if (errors) {
						console.log(errors);
					} else {
						console.log("no errors detected");
					}
					response.end();
				});
			} else if (request.url === '/1') {
				filesystem.readFile('views/view1.html','utf8', function(errors, contents) {
					response.write(contents);
					if (errors) {
						console.log(errors);
					} else {
						console.log("no errors detected");
					}

					response.end();
				});

			} else if (request.url === '/2') {
				filesystem.readFile('views/view2.html','utf8', function(errors, contents) {
					response.write(contents);
					if (errors) {
						console.log(errors);
					} else {
						console.log("no errors detected");
					}

					response.end();
				});

			}else if (request.url === '/3') {
				filesystem.readFile('views/view3.html','utf8', function(errors, contents) {
					response.write(contents);
					if (errors) {
						console.log(errors);
					} else {
						console.log("no errors detected");
					}

					response.end();
				});

			} else {
				response.end('File not found!!!');
			}
		});

server.listen(80);
console.log('Server runnng at port 80');