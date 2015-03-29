app.factory('UserFactory', function UserFactory($http, API_URL, AuthTokenFactory, $q) {
	'use strict';
	return {
		register: register,
		login: login,
		logout: logout,
		getUser: getUser
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

	function getUser() {
		if (AuthTokenFactory.getToken()) {
			return $http.get(API_URL + '/api/users/:id');
		} 
		else {
			return $q.reject({ data: 'client has no auth token' });
		}
	}

	function logout() {
		AuthTokenFactory.setToken();
	}
});