(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //
  // This controller manages the 'to buy' list
  //
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.toBuyList = ShoppingListCheckOffService.getToBuyItems();

    ctrl.bought = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  //
  // This controller manages the 'bought' list
  //
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.boughtList = ShoppingListCheckOffService.getBoughtItems();
  }

  //
  // The service that contains both lists
  //
  function ShoppingListCheckOffService() {
    var myInitialShoppingList =
    [
      { name: 'apples', quantity: 3 },
      { name: 'mandarins', quantity: 5 },
      { name: 'pasta', quantity: '1 packet' },
      { name: 'apple juice', quantity: '2 Litres' },
      { name: 'cookies',  quantity: 10 },
      { name: 'socks', quantity: "2 pair" },
      { name: 'flowers', quantity: "1 bunch" }
    ];

    var service = this;

    var toBuyItems = myInitialShoppingList;
    var boughtItems = [];

    service.getToBuyItems = function() {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };


    service.buyItem = function (index) {
      // splice() returns the removed item(s) in a new Array.
      var newItems = toBuyItems.splice(index, 1);

      // The first element of the removed items is the removed item.
      // We know this as we only removed one item above.
      boughtItems.push(newItems[0]);
    }
  }

})();
