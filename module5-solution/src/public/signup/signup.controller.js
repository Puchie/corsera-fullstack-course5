(function() {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];

function SignupController( SignupService ) {
  var $ctrl = this;

  var $service = SignupService;

  $ctrl.saved = false;

  $ctrl.firstName = "A";
  $ctrl.lastName = "B";
  $ctrl.email = "C";
  $ctrl.phone = "D";
  $ctrl.favourite = "E";

  $ctrl.signup = function () {
    console.log("Signing up");
    $service.signup( {
      firstName: $ctrl.firstName,
      lastName: $ctrl.lastName,
      email: $ctrl.email,
      phone: $ctrl.phone,
      favourite: $ctrl.favourite
    });
    $ctrl.saved = $service.saved();
  }
}
})();
