app.controller('HomeCtrl', function HomeCtrl(UserFactory, ProductFactory, ReviewFactory, $location) {
	'use strict';
	var vm = this;
	vm.addProduct = addProduct;
	vm.getProducts = getProducts;
	vm.loadProduct = loadProduct;

	UserFactory.getUser().then(function success(response) {
		vm.user = response.data;
	});

	function getProducts () {
		console.log("---------Begin get products function---------");
		ProductFactory.getProducts().
			then(function success(response) {
				vm.products = response.data;
				console.log(vm.products);
			}, handleError);
	}

	function handleError(response) {
		alert('Error: ' + response.data);
	}

	vm.logout = logout;

	function logout() {
		console.log("---------Begin Logout Function---------");
		UserFactory.logout();
		vm.user = null;
		$location.path('/login');
	}

	function addProduct(name, description) {
		ProductFactory.addProduct(name, description).
			then(function success(response) {
				vm.product = response.data;
				getProducts();
			}, handleError);
	}

	function loadProduct(data) {
		console.log("---------Begin loadProduct Function---------");
		ProductFactory.getProduct(data).
			then(function success(response) {
				vm.product = response.data;
				console.log(vm.product.id);
					ReviewFactory.getReviews(vm.product.id).
						then(function success(response) {
							vm.reviews = response.data;
							console.log(vm.reviews);
							$location.path('/reviews').search({ product_id: vm.product.id })
						});
			}, handleError);
	}

	getProducts();
});