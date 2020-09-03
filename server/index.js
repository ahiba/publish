var express = require('express')
var app = express()
const port = 8002

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`)
})