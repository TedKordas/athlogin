const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const PORT = 4000;


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('form');
    res.sendFile(__dirname + '/App.js');
    res.sendFile("App.js");
});

app.post('/', urlencodedParser, function(req, res) {
    console.log(req.body);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

