(function() {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['SignupService', 'URL_ROOT'];

function RegistrationController( SignupService, URL_ROOT ) {
  var $ctrl = this;

  var $service = SignupService;

  var registration = $service.getRegistration();

  $ctrl.saved = $service.saved();
  $ctrl.basePath = URL_ROOT;

  if ($service.saved()) {
  console.log("registration: " + registration);

  $ctrl.firstName = registration.firstName;
  $ctrl.lastName = registration.lastName;
  $ctrl.email = registration.email;
  $ctrl.phone = registration.phone;
  if (!$ctrl.phone) {
    $ctrl.phone = "Phone number not supplied"
  }
  $ctrl.menu_item = registration.menu_item;
  $ctrl.favourite_image = $ctrl.basePath + "/images/" + registration.menu_item.short_name + ".jpg";

  console.log($ctrl.favourite_image);
}
}
})();
