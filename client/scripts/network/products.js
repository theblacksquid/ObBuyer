angular.module('app.network')
.factory('Product',function(){
	
})
.service('products',function(obSocket,$rootScope,User){
	var service = this;
	productList=[];
	
	var getCatalog = function(){
		return productList;
	}
	
	obSocket.then(function(socket){
		socket.on('store:listProducts',function(evt,user){
			$rootScope.$broadcast('listProducts');
		})
	})
	
})