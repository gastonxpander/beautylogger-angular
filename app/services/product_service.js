app.factory('ProductFactory', function ProductFactory($http, API_URL, AuthTokenFactory, $q) {
	'use strict';
	return {
		addProduct: addProduct,
		getProducts: getProducts,
		getProduct: getProduct
	};

	function addProduct(name, description) {
		return $http.post(API_URL + '/api/products'
			, {
			name: name,
			description: description
			}
		);
	}

	function getProducts() {
		if (AuthTokenFactory.getToken()) {
			return $http.get(API_URL + '/api/products');
		} 
		else {
			return $q.reject({ data: 'client has no auth token' });
		}
	}

	function logout() {
		AuthTokenFactory.setToken();
	}

	function getProduct(data) {
		if (AuthTokenFactory.getToken()) {
			return $http.get(API_URL + '/api/products/' + data);
		} 
		else {
			return $q.reject({ data: 'client has no auth token' });
		}
	}
});