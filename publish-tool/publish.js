const http = require('http');
const queryString = require('querystring');
const fs = require('fs');
var archiver = require('archiver');

let packname = './package';

// fs.stat(filename, (error, stat) =>{
  const options = {
    host: 'localhost',
    port: 3001,
    path: '/?filename=' + 'package.zip',
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      // 'Content-Length': 0
    }
  }

  var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  archive.directory(packname, false);

 

  // archive.on('end', () => {
  //   console.log("end")
  // });

  archive.finalize();

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    // res.setEncoding('utf8');
    // res.on('data', (chunk) => {
    //   console.log(`BODY: ${chunk}`);
    // });
    // res.on('end', () => {
    //   console.log('No more data in response.');
    // });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
  
  archive.pipe(req);

  archive.on('end', () => {
    req.end()
  })
  
  // Write data to request body
  // let readStream = fs.createReadStream("./eva.jpeg");
  // readStream.pipe(req)
  // readStream.on('end', () => {
  //   req.end()
  // })
  // req.write(postData);
  // req.end();

  
  // console.log('stat', stat)
// })

// const postData = queryString.stringify({
//   'content': 'hello world 123'
// })

// const postData = "hello world yes"


// const req = http.request(options);
// console.log('执行了 otpions', options)
// req.end();



