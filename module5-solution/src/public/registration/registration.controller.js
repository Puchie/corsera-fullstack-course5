(function() {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['SignupService'];

function RegistrationController( SignupService ) {
  var $ctrl = this;

  var $service = SignupService;

  var registration = $service.getRegistration();

  $ctrl.firstName = registration.firstName;
  $ctrl.lastName = registration.lastName;
  $ctrl.email = registration.email;
  $ctrl.phone = registration.phone;
  $ctrl.favourite = registration.favourite;
  $ctrl.saved = $service.saved();
}
})();
