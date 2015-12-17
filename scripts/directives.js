(function(){
	var app= angular.module('vmDirectives',[]);

	app.directive('vmHeader',function(){
		return{
			restrict:'E',
			templateUrl:'views/shared/header.html',
			controller:function(){
                // this.user= Session.getItem("user");
                 this.logOut=function()
                 {
                 	//Session.removeItem("user");
                 }
			},
			controllerAs:'header'
		}
	});

	app.directive('vmFooter',function(){
		return{
			restrict:'E',
			templateUrl:'views/shared/footer.html',
			controller:function(){
				
			},
			controllerAs:'footer'
		}
	});

	app.directive('gcLogo',function(){
		return{
			restrict:'E',
			templateUrl:'views/shared/logo.html'
		}
	});

	app.directive('gcComiccard',function(){
		return{
			restrict:'E',
			templateUrl:'views/shared/comic-card.html',
			scope:{comic: "="}
		}
	});

	app.directive('gcComments',function(){
		return{
			restrict:'E',
			templateUrl:'views/shared/comments.html',
			scope:{params: "="}
		}
	});
})();