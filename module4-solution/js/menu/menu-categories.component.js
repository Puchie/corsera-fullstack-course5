(function() {

angular.module("MenuApp")
.component('categories', {
  templateUrl: "src/MenuApp/templates/categories.html",
  controller: "CategoriesComponentController",
  bindings: {
    items: '<'
  }
});

})();
