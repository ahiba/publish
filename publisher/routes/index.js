var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET home page. */
router.post('/', function(request, res, next) {
  console.log('执行了3001')
  console.log('request.query.filename', request.query.filename); 
  // let body = []
  // request.on('data', (chunk) => {
  //   body.push(chunk)
  // }).on('end', () => {
  //   body = Buffer.concat(body).toString()
   
  // }) 
  fs.writeFileSync("../server/public/"+request.query.filename, request.body.content)
  res.send('');
  res.end(); 
  // fs.writeFileSync("../server/public/1.html", "hello world")
  // res.render('index', { title: 'Express' });
});

module.exports = router;
