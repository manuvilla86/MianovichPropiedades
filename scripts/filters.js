(function(){

  var app= angular.module('gcFilters',[]);

  app.filter('lessThan', function() {
    return function(array,field,value) {
      var returnArr= [];
      try{
        for (var i = 0 ; i < array.length ; i++) {
            if(array[i][field]<= value)
                returnArr.push(array[i]);
        };
      }
      catch(ex)
      {
        return array;
      }
      return returnArr;
    };
  });
  
  app.filter('greaterThan', function() {
    return function(array,field,value) {
      var returnArr= [];
      try{
        for (var i = 0 ; i < array.length ; i++) {
            if(array[i][field]>= value)
                returnArr.push(array[i]);
        };
      }
      catch(ex)
      {
        return array;
      }
      return returnArr;
    };
  });

})();

