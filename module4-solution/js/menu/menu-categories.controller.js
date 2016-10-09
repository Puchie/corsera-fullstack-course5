(function() {
'use stric';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var ctrl = this;

console.log("Categories: ", categories);
  ctrl.categories = categories;
}

})();
