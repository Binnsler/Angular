// Create a new module with NO dependencies
var App = angular.module('App', []);

// Create a controller
// Dependencies are objects that are injected so they can be accessed in the function
App.controller('foodController', function($scope, foodService, foodFactory){
	$scope.bestFood = 'Watermelon';
	$scope.worstFood = 'Tofu';

	$scope.lookAtFood = function(){
		console.log(arguments);
	}

	// console.log('Food', foodService.message)

	$scope.foodService = foodService;
	$scope.foodFactory = foodFactory;
	$scope.foods = [
		{name: 'Chicken Nuggets',
		price: 5
		},
		{name: 'Buffalo Jerky',
		price: 6
		}
	]


});

// Services and Factories are created on modules, similarly to controllers
App.service('foodService', function(){

	// This refers to the object that foodService will be creating
	this.message = 'Welcome to the Food Service Station!';

});

// Factory and Service occupy the same space, so just use whichever semantically works best (Service)
App.factory('foodFactory', function(){

	var message = 'Thanks for stopping by!'

	return {
		message: message
	}

});


// Directives allow you to inject code to the page or add attributes

// This is the simple syntax
App.directive('title', function(){

	// Pass in scope and the element we are placing this directive on
	return function(scope, element){

		element.bind("mouseenter", function(){
			console.log('I AM IN THE TITLE')
		})

	}

});

App.directive('food', function(){


	return {
		restrict: 'E', // E for custom elements, A for custom attributes, C for custom classes
		template: '<h1>Food for Thought</h1'

	}

});