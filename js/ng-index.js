angular.module("indexModule", ["ngRoute"])

.controller("homepageCtrl", ["$scope","$http",function($scope, $http){
	$http.get("resource/terms.json").success(function(data){
		$scope.terms = data;
	});
}])

.controller("contentCtrl", ["$scope","$routeParams","$http", function($scope, $routeParams, $http){
	$http.get("resource/"+$routeParams.url+".json").success(function(data){
		$scope.data = data;
	});
}])

.config(["$routeProvider", function($routeProvider){
	$routeProvider.
	when('/homepage', {
		templateUrl: 'views/homepage.html',
		controller: 'homepageCtrl'
	}).
	when('/content/:url', {
		templateUrl: 'views/content.html',
		controller: 'contentCtrl'
	}).
	otherwise({
		redirectTo: '/homepage'
	});
}])

.directive("hpUnit", function(){
	return{
		restrict: "AEC",
		scope: {term: "=term"},
		link: function(scope, ele, attr){
			ele.css("background-color",scope.term.color);
			ele.on("click", function(){
				location.href = '#/content/'+scope.term.url;
			});
		}
	}
});