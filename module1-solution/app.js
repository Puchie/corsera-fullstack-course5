(function() {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.foodList = "";
  $scope.message = "";
  $scope.colour = "black";

  $scope.CheckList = function() {

    var trimmed = $scope.foodList.trim();
    var empty = (trimmed === "");

    if (empty) {
      $scope.colour = "red";
      $scope.message = "Please enter data first";
    } else {

      $scope.colour = "green";
      var items = trimmed.split(',').length;

      if (items <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
};

})();
