app.factory('ReviewFactory', function ReviewFactory($http, API_URL, AuthTokenFactory, $q) {
	'use strict';
	return {
		addReview: addReview,
		getReviews: getReviews
	};

	function addReview(product_id, description, rating) {
		return $http.post(API_URL + '/api/reviews'
			, {
			product_id: product_id,
			description: description,
			rating: rating
			}
		);
	}

	function getReviews(data) {
		console.log('BEGIN GET REVIEWS SERVICE');
		console.log(data);
		if (AuthTokenFactory.getToken()) {
			return $http.get(API_URL + '/api/reviews', { params: { product_id: data } });
		} 
		else {
			return $q.reject({ data: 'client has no auth token' });
		}
	}

	function logout() {
		AuthTokenFactory.setToken();
	}
});