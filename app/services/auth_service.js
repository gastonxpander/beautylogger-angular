app.factory('UserFactory', function UserFactory($http, API_URL, AuthTokenFactory) {
	'use strict';
	return {
		register: register,
		login: login
	};

	function register(email, password) {
		return $http.post(API_URL + '/auth/register'
			, {
			email: email,
			password: password
			}
		);
	}

	function login(email, password) {
		return $http.post(API_URL + '/auth/authenticate'
			, {
			email: email,
			password: password
			}
		).
			then(function success(response) {
				AuthTokenFactory.setToken(response.data.token);
				return response;
			});
	}
});