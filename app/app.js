'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.
  	when( '/register', { templateUrl: 'views/register.html' }).
  	when( '/login', { templateUrl: 'views/login.html' }).
  	when( '/home', { templateUrl: 'views/home.html' }).
  	when( '/reviews', { templateUrl: 'views/reviews.html' }).
  	otherwise(
  		{ redirectTo: '/login' }
  	);
  	$httpProvider.interceptors.push('AuthInterceptor');
}]);

app.constant('API_URL', 'https://blooming-dusk-6660.herokuapp.com:3000');