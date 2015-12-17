(function(){
	var app= angular.module('MP');
    
    app.controller('CarouselController',['$scope',function($scope){
        $scope.slides= [{id:1,image:'http://weknowyourdreams.com/images/house/house-09.jpg'},
                        {id:2,image:'http://weknowyourdreams.com/images/house/house-08.jpg'},
                        {id:3,image:'http://weknowyourdreams.com/images/house/house-07.jpg'},
                        {id:4,image:'http://weknowyourdreams.com/images/house/house-06.jpg'},
                        {id:5,image:'http://weknowyourdreams.com/images/house/house-05.jpg'},
                        {id:6,image:'http://weknowyourdreams.com/images/house/house-04.jpg'},
                        ]
    }]);
})();