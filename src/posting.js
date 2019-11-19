var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/startList', urlencodedParser, function(req, res) {
    res.render('contact', {qs: req.query});
});

