/**
 * Store Front Angular Module 
 */
angular.module('app.merchant',['ui.router'])
.config(function($stateProvider){
	$stateProvider
		.state('store',{
			abstract: true,
			url: '/store',
			templateUrl: 'scripts/store/store.html',
			controller: 'MerchantController as merchant'
		})
		.state('store.details',{
			url: '/:title',
			templateUrl: 'scripts/store/productDetails.html',
			controller: 'ProductController'
		})
		.state('store.cart',{
			url: '/:contractId',
			templateUrl: 'scripts/store/productDetails.html',
			controller: 'CartController'
		})
		.state('store.purchase',{
			url: '/:contractId',
			templateUrl: 'scripts/store/productDetails.html',
			controller: 'ProductController'
		})
})
.controller('MerchantController',function($http,$scope,$stateParams){
	var merchant = this;
	$http.get("http://localhost:8000/getProducts")
	.success(function(result){
		merchant.products = result;
		console.log("Retrieved products: ", result);
	})
	.error(function(){
		console.log("Error retrieving products");
	});
})
.controller('ProductController',function($http,$scope,$stateParams){
	// use the title to find the product in the merchant.products and make that the selected product
	$scope.selectedTitle = $stateParams.title;
	var pcontroller = this;
	$http.get("http://localhost:8000/getProduct/" + $stateParams.title)
	.success(function(result){
		pcontroller.product = result;
		console.log("Retrieved product: ", result);
		console.log("Retrieved product url: ", result[0].imageurl);
		console.log("Retrieved product contractId: ", result[0].contractId);
		$scope.imageurl = result[0].imageurl;
		$scope.selectedProduct = result[0];
	})
	.error(function(){
		console.log("Error retrieving product");
	});
})
.controller('CartController',function($http,$scope,$stateParams){
	$http.get("http://localhost:8000/updateCart/" + $stateParams.contractId)
	.success(function(result){
		$scope.totalproducts = result.length;
	})
	.error(function(){
		console.log("Error updating cart");
	});
})