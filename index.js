// var express = require('express');
// var app = express();

// var port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/public'));

// app.listen(port, function(){
// 	console.log('listening');
// });


var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res)=> {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("Server Started");