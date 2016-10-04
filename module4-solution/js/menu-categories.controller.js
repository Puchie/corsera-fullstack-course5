(function() {
'use stric';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService','categories'];
function CategoriesController(MenuDataService, categories) {
  var ctrl = this;

  console.log("Arrived in CategoriesController with: ", categories);
  ctrl.categories = categories;
}

})();
