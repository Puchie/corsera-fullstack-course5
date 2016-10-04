(function(){
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('HttpRoot', "https://davids-restaurant.herokuapp.com")
;

MenuDataService.$inject = ['$http','HttpRoot'];
function MenuDataService($http, HttpRoot) {
  var service = this;

  service.getAllCategories = function() {
    console.log("In getAllCategories");
    return $http({
      method: 'GET',
      url: (HttpRoot + "/categories.json")
    }).then(function(response) {
      return response.data;
    });
  };
};

})();
