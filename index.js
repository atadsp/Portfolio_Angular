// var express = require('express');
// var app = express();

// var port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/public'));

// app.listen(port, function(){
//  console.log('listening');
// });


// var express = require('express');
// var app		= express();
// var http	= require('http').Server(app);

// //Tell node where to find static files
// app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// });

// http.listen(process.env.PORT || port, function(){
// 	console.log('listening on *:3000');
// });





var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send("hello world");
});


app.listen(process.env.PORT || port, function(err){
    console.log('running server on port ' + port);
});