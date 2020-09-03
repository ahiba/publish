const http = require('http');
const queryString = require('querystring');

const postData = queryString.stringify({
  'content': 'hello world 123'
})

// const postData = "hello world yes"

const options = {
  host: 'localhost',
  port: 3001,
  path: '/?filename=z.html',
  method: 'post',
  headers: {
    'Content-Type': 'application/octet-stream',
    'Content-Length': Buffer.byteLength(postData)
  }
}

// const req = http.request(options);
// console.log('执行了 otpions', options)
// req.end();

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

// Write data to request body
req.write(postData);
req.end();