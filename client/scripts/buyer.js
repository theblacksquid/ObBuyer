/**
 * Main Angular Module 
 */
angular.module('app',['ui.router','app.menu','app.merchant'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('login',{
			url: '/login',
			template: '<form><input type="text" class="form-control" placeholder="Enter User Handle to Login"></form>',
			controller: 'UserController'
		})
		.state('register',{
			url: '/register',
			templateUrl: 'scripts/menu/registration.html'
		})
		.state('addUser',{
			url: '/addUser',
			template: '<div ui-view><p>User Registered</p></div>',
			controller: 'RegistrationController'
		})
		.state('cart',{
				url: '/cart',
				templateUrl: 'scripts/store/cart.html'
		})
		.state('search',{
				url: '/search',
				templateUrl: 'scripts/store/search.html'
		})
		.state('home',{
			url: '/home',
			templateUrl: 'scripts/menu/main.html'
		})
		.state('merchant',{
			url: '/merchant',
			templateUrl: 'scripts/menu/merchant.html'
		})
		.state('openbazaar',{
			url: '/openbazaar',
			templateUrl: 'https://openbazaar.org'
		})
		.state('contracts',{
			url: '/openbazaar',
			templateUrl: 'scripts/store/contracts.html'
		})
		.state('handling',{
			url: '/handling',
			templateUrl: 'scripts/store/handling.html'
		})
		.state('support',{
			url: '/support',
			templateUrl: 'scripts/store/support.html'
		})
		.state('products',{
			url: '/products',
			templateUrl: 'scripts/store/store.html'
		})
})
.controller('UserController',function($http,$scope){
	$http.get("http://localhost:8000/login")
	.success(function(user){
		console.log("Welcome: ", user.name );
	})
	.error(function(){
		console.log("Please register");
	});
})
.controller('RegistrationController',function($http,$scope){
	 $scope.addUser = function () {
	 }
})
