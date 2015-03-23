app.controller('LoginCtrl', function LoginCtrl(UserFactory, $location) {
	'use strict';
	var vm = this;
	vm.login = login;

	function login (email, password) {
		UserFactory.login(email, password).
			then(function success(response) {
				vm.user = response.data.user;
				console.log(vm.user);
				console.log(response.data.token);
				$location.path('/home');
			}, handleError);
	}

	function handleError(response) {
		$location.path('/login');
		var message = JSON.stringify(response.data.error);
		alert(message);
	}
	
});