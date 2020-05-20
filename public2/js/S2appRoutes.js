angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
        // .when('/', {
		// templateUrl: 'views/login.html',
		// controller: 'LoginController'
	    //  })
		// home page
		// .when('/signnedup', {
		// 	templateUrl: 'veiws/login.html',
		// 	controller: 'loginController'
		// })
		.when('/login', {
			templateUrl: 'veiws/login.html',
			controller: 'loginController'
	
		})


		.when('/signup', {
			templateUrl: 'veiws/signup.html',
			controller: 'signupController'
		})

		



	$locationProvider.html5Mode(true);

}]);