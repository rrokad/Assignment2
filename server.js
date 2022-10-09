const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', '.ejs');
    res.end('Hello World\n');
});

server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});

var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');