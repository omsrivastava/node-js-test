var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log('connecting: ', request.url);
  if(request.url === '/home' || request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(response);
  } else if(request.url === '/contact') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(response);
  } else if(request.url === '/users') {
    var users = [{ name: 'Jack', age: 35 }, { name: 'Pecha', age: 48 }];
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(response);
  }
}).listen(4200);

console.log('Server running at port: 4200');