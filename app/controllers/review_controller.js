app.controller('ReviewCtrl', function ReviewCtrl(UserFactory, ProductFactory, ReviewFactory, $location, $routeParams) {
	'use strict';
	var vm = this;
	vm.addReview = addReview;
	vm.getReviews = getReviews;
	var productId = $routeParams.product_id;
	vm.productId = productId;
	vm.goHome = function () { $location.path('/home'); };

	ProductFactory.getProduct().then(function success(response) {
		vm.product = response.data;
	});

	function getReviews (productId) {
		console.log("---------Begin get reviews function---------");
		ReviewFactory.getReviews(productId).
			then(function success(response) {
				vm.reviews = response.data;
				console.log(vm.reviews);
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

	function addReview(productId, description, rating) {
		ReviewFactory.addReview(productId, description, rating).
			then(function success(response) {
				vm.review = response.data;
				getReviews(productId);
			}, handleError);
	}

	function getProduct(productId) {
		console.log("---------Begin get product function---------");
		ProductFactory.getProduct(productId).
			then(function success(response) {
				vm.product = response.data;
				console.log(vm.product);
			}, handleError);
	}

	getReviews(productId);
	getProduct(productId);
});

