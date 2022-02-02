// npm init -y
// we use the core module http

const http = require('http');

const server = http.createServer(function (request, response) {
	console.log('this is the requested url: ', request.url)
	console.log('this is the requested method: ', request.method)
	console.log('this is the request handler')
	// only for a specific request url we want to display the home page string
	if (request.url === '/') {
		response.end('<h1>this is the home page</h1>')
	} else if (request.url === '/about') {
		response.end('<h1>this is the about page</h1>')
	} else {
		response.end('<h1>404 - Not Found</h1>')
	}
})

// start the server - common to use: 3000, 8000, 5555, 5000 
server.listen(3000, function () {
	console.log('hello from port 3000')
})