const http = require('http');

const server = http.createServer((req, res) => {
  console.log('You requested', req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello Express')
})

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000...');
