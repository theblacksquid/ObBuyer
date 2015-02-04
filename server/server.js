var express = require('express');
var app = express();

// temporary code
var crypto = require('crypto');

var mongoose = require('mongoose');
var cors = require('cors');

var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Start the server
var port = process.env.PORT || 8000;
server.listen(port, function() {
  console.log("Running on port ", port);
});

// Serve the client
var staticPath = path.join(__dirname, '../client');

console.log("static path ", staticPath);

app.use(express.static(staticPath));

// Configuration
app.use(express.logger('dev'));

app.use(express.cookieParser());
app.user(express.session({secret:'OpenBazaar Buyer prototype'}));

// parse incoming html forms
app.use(express.bodyParser());

//expose session to views 
app.use(function(req,res,next){
	res.locals.session = req.session;
	next();
});


app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

mongoose.connect('mongodb://localhost:27017/bazaarbuyer');

// User

var user = require('./db/user.js').Catalog;
var userScheme = user.getUserScheme();
var User  = mongoose.model('User',userScheme,'user');


app.get('/register/:email', function(req, res) {
	User.findById({email:req.params.email},function(err,user){
		if(err){
			console.log("Registration failed");
			return next(err);
		}
		if(user)
			return res.send("User exists");
		
		// temporary code copied from mongodb class notes
		crypto.randomBytes(16, function(err,bytes){
			if(err) return next(err);
			
			var user = {_id:email};
			user.salt = bytpes.toString('utf8');
			user.hash = hash(pass,user.salt);
		});
	})
});

app.get('/addUser/:handle', function(req, res) {
	User.find({handle:req.params.handle},function(err,doc){
		if(err){
			console.log("Registration required");
		}else
			res.send(doc);
	})
});


var catalog = require('./db/catalog.js').Catalog;
var catalogScheme = catalog.getCatalogScheme();
var Product  = mongoose.model('Product',catalogScheme,'catalog');

app.get('/getProducts', function(req, res) {
	Product.find(function(err,doc){
		res.send(doc);
	})
});

app.get('/getProduct/:title', function(req, res) {
	var ptitle = req.params.title;
	Product.find({title:ptitle},function(err,doc){
		res.send(doc);
	})
});



// Handle socket.io
require('./routes/bazaarsockets.js')(app, io);




