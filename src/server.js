var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const PORT = 3000;


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('form');
    res.sendFile(__dirname + '/App.js');
    res.sendFile("App.js");
});

app.post('/', urlencodedParser, function(req, res) {
    var fistName = req.body.firstName;
    console.log(req.body);
    res.render('contact', {qs: req.query});
});

app.listen(`${PORT}`)

