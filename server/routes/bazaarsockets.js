module.exports = (function(app,io){
	var store = {
			io: io,
			users: [],
			products: []
	};
	
	store.io.sockets.on('connection',function onConnection(socket){
		
		socket.emit('connected',{id:socket.id});
		
		var user = new User({ id: socket.id});
		store.users.push(user);
		
		socket.on('userLogin', onUserLogin);
		socket.on('listProducts', onListProducts);
		
	});
	
	var onUserLogin = function(data){
		var user = loginUser(this.id);
		
	};
	
	exports.onListProducts = function(data){
		MongoClient.connect('mongodb://localhost:27017/bazaarbuyer', function(err, db) {
		    if(err) throw err;

		    db.collection('contracts').findOne(function(err, doc) {
		        if(err) throw err;
		        
		        if(!doc){
		        	console.dir("No document found");
		        }

		        console.dir("Successfully found: " + JSON.stringify(doc));
		        
		        db.close();

				this.emit('listProducts',JSON.stringify(doc));
		    });
		});
	};
})