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
    templateUrl: 'src/MenuApp/templates/categories.template.html',
    controller: 'CategoriesController as catList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        console.log("Evaluating resolve on: ", MenuDataService);
        var promise = MenuDataService.getAllCategories();
        console.log("Promise = ", promise);
        return promise;
      }]
    }
  })
  ;

}
})();
