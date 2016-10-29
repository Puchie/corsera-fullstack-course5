(function() {
'use strict';

angular.module('public')
.controller('SignupController', SignupController)
;

SignupController.$inject = ['SignupService','$http', 'URL_ROOT'];

function SignupController( SignupService, $http, URL_ROOT ) {
  var $ctrl = this;

  var $service = SignupService;

  $ctrl.saved = false;
  $ctrl.message = "";
  $ctrl.basePath = URL_ROOT;

  $ctrl.firstName = "Abigail";
  $ctrl.lastName = "Wilberforce";
  $ctrl.email = "a@b";
  $ctrl.phone = "";
  $ctrl.favourite = "A5";

  $ctrl.signup = function () {
    console.log("Signing up");

    var promise = $http({
      method: "GET",
      url: ($ctrl.basePath + "/menu_items/" + $ctrl.favourite + ".json")
    }).then(function(result) {
      console.log(result.data);
      $service.signup( {
        firstName: $ctrl.firstName,
        lastName: $ctrl.lastName,
        email: $ctrl.email,
        phone: $ctrl.phone,
        menu_item: result.data
      });
        console.log("It checked out");
      $ctrl.message = "Your information has been saved";
    }, function(error) {
      console.log("I could not find it");
      $ctrl.message = "No such menu number exists";
    })


  }
}
})();
