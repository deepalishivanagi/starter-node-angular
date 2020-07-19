angular.module('ProfileCtrl', []).controller('ProfileController', function($scope,$http) {
    $http.get('/queryProfile').then(function(item) {
		console.log(item);
	//	$scope.data= item.data;
 
	// $scope.tagline = 'Hackers are the smart workers';	

});
});