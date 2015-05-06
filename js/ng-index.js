angular.module("indexModule", ["ngRoute"])

.controller("homepageCtrl", ["$scope","$http",function($scope, $http){
	$http.get("resource/terms.json").success(function(data){
		$scope.terms = data;
	});
}])

.controller("contentCtrl", ["$scope","$routeParams","$http", function($scope, $routeParams, $http){
	$scope.url = $routeParams.url;
	// $scope.url = "ubuntu";
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

.directive("navUnit", function(){
	return{
		restrict: "AEC",
		scope: {term: "=term"},
		link: function(scope, ele, attr){
			//ele.css("background-color",scope.term.color);
			ele.on("click", function(){
				location.replace('#/content/'+scope.term.url);
			});
			ele.on("mouseenter", function(){
				ele.css("background",scope.term.color);
			});
			ele.on("mouseleave", function(){
				ele.css("background","#6f5499");
			});
		}
	}
})

.directive("navbar", function(){
	return{
		restrict: "AEC",
		link: function(scope, ele, attr){
			var navbarhight = ele.offset().top;
			var status = 0;
			$(window).on("scroll", function(){
				if($(this).scrollTop() >= navbarhight && status==0){
					ele.toggleClass("nav-fix");
					status = 1;
					$("section").css("padding","116px 0 50px 0");
				}else if($(this).scrollTop() < navbarhight && status==1){
					ele.toggleClass("nav-fix");
					status = 0;
					$("section").css("padding","50px 0 50px 0");
				}
				//console.log(scope.navCtr);
				scope.$apply();
			});
		}
	}
})

.directive("hpUnit", function(){
	return{
		restrict: "AEC",
		scope: {term: "=term"},
		link: function(scope, ele, attr){
			ele.css("background-color",scope.term.color);
			ele.on("click", function(){
				//location.href = '#/content/'+scope.term.url;
				location.replace('#/content/'+scope.term.url);
			});
		}
	}
})

.directive("contentMain", ["$routeParams", function($routeParams){
	return{
		restrict: "AEC",
		templateUrl: "views/"+$routeParams.url+".html",
		link: function(){

		}
	}
}]);

// .directive("contentMain", function($compile, $http, $templateCache, $parse){
// 	return{
// 		restrict: "AEC",
// 		//scope: {url: "@url"},
// 		// templateUrl: function(ele,attr){
// 		// 	return "views/"+attr.type+".html"
// 		// },
// 		//controller: 'contentCtrl',
// 		//templateUrl: "views/{{url}}.html",
// 		//templateUrl: "views/ubuntu.html",
// 		template: "<p>ubuntu</p>",
// 		link: function(scope , element, attrs) {

// 			scope.$watch(attrs.type, function (value) {
// 				if (value) {
// 					loadTemplate(value);
// 				}
// 			});

// 			function loadTemplate(template) {
// 				$http.get("views/"+template+".html", { cache: $templateCache })
// 				.success(function(templateContent) {
// 					element.replaceWith($compile(templateContent)(scope));                
// 				});    
// 			}
// 		} 
// 	}
// });