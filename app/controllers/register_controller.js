app.controller('RegisterCtrl', function RegisterCtrl(UserFactory) {
	'use strict';
	var vm = this;
	vm.register = register;

	function register (email, password) {
		UserFactory.register(email, password).
			then(function success(response) {
				vm.user = response.data;
			}, handleError);
	}

	function handleError(response) {
		alert('Error: ' + response.data);
	}


});