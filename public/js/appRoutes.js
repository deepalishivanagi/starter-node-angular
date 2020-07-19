angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
        // .when('/', {
		// templateUrl: 'views/login.html',
		// controller: 'LoginController'
	    //  })
		// home page
		
		.when('/loggedin', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
	
		})
		// .when('/signnedup', {
		// 	templateUrl: 'views/home.html',
		// 	controller: 'MainController'
	
		// })



		.when('/company', {
			templateUrl: 'views/company.html',
			//controller: 'CompanyController'
		})

		// .when('/nerd', {
		// 	templateUrl: 'views/company.html',
		// 	controller: 'CompanyController'
		// })

		

		.when('/hacker', {
			templateUrl: 'views/hacker.html',
			controller: 'HackerController'
		})
		.when('/profile',{
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'
		})

		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		});

	



	$locationProvider.html5Mode(true);

}]);



