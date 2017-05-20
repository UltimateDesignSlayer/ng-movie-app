var express = require('express')
var app = express()
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('assets')); //All assets files in here.

app.listen(process.env.PORT || 1234, function () {
  console.log('App is on port 1234. (localhost:1234)')
})
