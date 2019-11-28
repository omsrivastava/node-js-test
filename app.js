var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets', express.static('public/assets'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contact', function(req, res) {
  res.render('contact', { qr: req.query });
});

app.post('/contact', urlencodedParser, function(req, res) {
  res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', function(req, res) {
  const data = { age: 26, job: 'Developer', hobbies: ['Coding', 'Eating', 'Gaming'] };

  res.render('profile', { person: req.params.name, data });
});

app.listen(4200);