angular.module('app.menu',['ui.router'])
.config(function($stateProvider){
	$stateProvider
		.state('menudetail',{
			url: '',
			templateUrl: '/scripts/menu/main.html'
		})
})