(function(){
	var app= angular.module('MP',['ngRoute','vmDirectives']);

	app.config(function($routeProvider){
       $routeProvider
       .when('/',{
           redirectTo:'home'
       })
       .when('/home', {
        templateUrl: "views/home/home.html"
       });
      });
})();