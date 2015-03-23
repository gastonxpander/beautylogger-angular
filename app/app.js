'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when( '/register', { templateUrl: 'views/register.html' }).
  	when( '/login', { templateUrl: 'views/login.html' }).
  	when( '/home', { templateUrl: 'views/home.html' }).
  	otherwise(
  		{ redirectTo: '/login' }
  	);
}]);

app.constant('API_URL', 'http://localhost:3000');