(function() {

angular.module("MenuApp")
.component('items', {
  templateUrl: "src/MenuApp/templates/items.html",
  bindings: {
    items: '<'
  }
});

})();
