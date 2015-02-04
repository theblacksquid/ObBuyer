var User = function(){};

var userScheme = {
		_id: {type: String , validate: validEmail},
		name: {first: String, last: String},
		//created: {type: Date, default: Date.now},
		handle:String,
		guid:String,
		address:String,
		contracturalHistory: [ {stage: String, contractId: String}],
		cart: {
			contractId : String
		},
		wallet: { pgpPubKey: String, bitcoinPubkey: String}
}


User.prototype.getUserScheme = function(){
	return userScheme;
}

exports.User = new User();