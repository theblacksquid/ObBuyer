var Merchant = function(){};

var merchantScheme = {
		shipping: String,
		notary: String
}

Merchant.prototype.getMerchantScheme = function(){
	return merchantScheme;
}

exports.Merchant = new Merchant();
