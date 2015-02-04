var Catalog = function(){};

var catalogScheme = {
		item:String,
		imageurl:String
}

Catalog.prototype.getCatalogScheme = function(){
	return catalogScheme;
}

exports.Catalog = new Catalog();