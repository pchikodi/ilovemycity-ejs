var express = require('express');
var app = express();

var routes=require('./routes/route.js');

app.use(express.static(__dirname +'/public'));
app.set('view engine', 'ejs');

app.get('/', routes.home);
app.get('/:city',routes.city);


var port = process.env.PORT || 3000;

var server = app.listen(port, function(req,res){
	console.log('Server is listening at port :', port);
})