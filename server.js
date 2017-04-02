var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port ' + listener.address().port);
});
