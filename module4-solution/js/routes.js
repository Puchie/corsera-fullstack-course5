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
        var promise = MenuDataService.getAllCategories();
        return promise;
      }]
    }
  })
  .state('categories.item', {
    url: '/{shortName}',
    templateUrl: 'src/MenuApp/templates/items.template.html',
    controller: 'ItemsController as itemsList',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        var promise = MenuDataService.getItemsForCategory($stateParams.shortName);
        return promise;
      }]
    }
  });
}
})();
