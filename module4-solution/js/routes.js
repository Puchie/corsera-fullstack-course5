(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    template: '<h2>Here I am</h2>'
    // templateUrl: 'src/MenuApp/templates/categories.template.html'
  })
  ;

}
})();
