var express = require('express');
var app = express();

app.use('/', express.static('app'));

var server = app.listen(process.env.PORT || 5000);