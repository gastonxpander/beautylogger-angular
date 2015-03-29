app.controller('IndexCtrl', function IndexCtrl(UserFactory, ProductFactory, ReviewFactory, $location) {
	'use strict';
	var vm = this;
	vm.logout = logout;

	function logout() {
		console.log("---------Begin Logout Function---------");
		UserFactory.logout();
		vm.user = null;
		$location.path('/login');
	}
});