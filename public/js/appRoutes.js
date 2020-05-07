angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/company', {
			templateUrl: 'views/company.html',
			//controller: 'CompanyController'
		})

		.when('/nerd', {
			templateUrl: 'views/company.html',
			controller: 'CompanyController'
		})

		

		.when('/hacker', {
			templateUrl: 'views/hacker.html',
			controller: 'HackerController'
		});


	$locationProvider.html5Mode(true);

}]);