var Contract = function(){};

var contractScheme = {
		"stage01_merchant": {
	        "metadata": {
	            "obcv": Number,
	            "category": String,
	            "subcategory": String,
	            "expiration_date_YYYYMMDD": Date
	        },
	        "nonce": Number,
	        "item_data": {
	            "title": String,
	            "description": String,
	            "price": {
	                "btc": Number,
	                "fiat": {
	                    "price": Number,
	                    "currency": String
	                }
	            },
	            "image": [
	                String,
	                String
	            ],
	            "condition": String,
	            "quantity": Number,
	            "keywords": [
	                "grape, preserve"
	            ],
	            "region": String,
	            "est_delivery": String,
	            "shipper": {
	                "handle": String,
	                "legal_address": String
	            }
	        },
	        "merchant": {
	            "guid": String,
	            "handle": String,
	            "legal_address": String,
	            "pubkeys": {
	                "pgp": String,
	                "secp256k1_uncompressed": String
	            }
	        }
	    },
		"stage02_buyer": {
		    "guid": String,
		    "handle": String,
		    "legal_address": String,
		    "pubkeys": {
		        "pgp": String,
		        "secp256k1_uncompressed": String
		    },
		    "stage01_hash": String
		},
		"stage03_notary": {
		    "guid": String,
		    "handle": String,
		    "legal_address": String,
		    "pubkeys": {
		        "pgp": String,
		        "secp256k1_uncompressed": String
		    },
		    "stage02_hash": String,
		    "escrow": {
		        "btc_address": String,
		        "redemption_script": String
		    }
		},
		"signatures": {
		    "stage01_merchant": String,
		    "stage02_buyer": String,
		    "stage03_notary": String
		}
	}

Contract.prototype.getContractScheme = function(){
	return contractScheme;
}

exports.Contract = new Contract();