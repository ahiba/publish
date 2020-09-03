const http = require('http');
const net = require('net');
const { URL } = require('url');
const fs = require('fs')

// Create an HTTP tunneling proxy
const server = http.createServer((req, res) => {
  console.log(req)
  let matched = req.url.match(/filename=([^&]+)/);
  let filename = matched && matched[1]
  if(!filename) return
  console.log('filename', filename)
  let writeStream = fs.createWriteStream("../server/public/" + filename)
  req.pipe(writeStream)
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  })

});

server.listen(3001);