(function(){

angular.module('public')
.service('SignupService', SignupService)
.constant('EMPTY', { firstName: "", lastName: "", email: "", phone: ""})
;

SignupService.$inject = ['EMPTY'];

function SignupService(EMPTY) {
  var $service = this;

  $service.registration = EMPTY;

  $service.signup = function (details) {
    console.log("details: ", details);
    console.log("empty: ", EMPTY);
    $service.registration = details;
  }

  $service.saved = function () {
    var result = $service.registration != EMPTY;
    console.log("saved: " + result);
    return result;
  }

  $service.getRegistration = function() {
    return $service.registration;
  }

}

})();
