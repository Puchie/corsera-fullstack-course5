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
    return $http({
      method: 'GET',
      url: (HttpRoot + "/categories.json")
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
    });
  };

  service.getItemsForCategory = function(shortName) {
    var url = HttpRoot + "/menu_items.json?category=" + shortName;
    return $http({
      method: 'GET',
      url: url
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
    });
  };
};

})();
