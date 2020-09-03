const http = require('http');
const net = require('net');
const { URL } = require('url');
const fs = require('fs');
const unzip = require('unzipper');


// Create an HTTP tunneling proxy
const server = http.createServer((req, res) => {
  // console.log(req)
  // let matched = req.url.match(/filename=([^&]+)/);
  // let filename = matched && matched[1]
  // if(!filename) return
  // console.log('filename', filename)
  // let writeStream = fs.createWriteStream("../server/public/package")

  // let writeStream =  unzip.Extract({path: '../server/public'});
  let writeStream = unzip.Extract({ path: '../server/public' });

  // req.pipe(writeStream);
   
  req.on('data', trunk => {
    writeStream.write(trunk)
  })
  req.on('end', trunk => {
    writeStream.end(trunk)
  })

  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  })

});

server.listen(3001);