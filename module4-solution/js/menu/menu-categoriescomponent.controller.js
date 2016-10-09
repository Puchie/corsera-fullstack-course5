(function() {
'use stric';

angular.module('MenuApp')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['$scope', '$element'];
function CategoriesComponentController($scope, $element) {
  var $ctrl = this;
  $ctrl.categories = $ctrl.items;
}

})();
