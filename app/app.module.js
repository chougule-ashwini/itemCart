// Define the `itemCartApp` module
var itemCartApp = angular.module('itemCartApp', [
  // ...which depends on the `itemList` module
  'ngRoute'
]).factory('CartService', function ($rootScope, $location, $http) {
  return {
    addToCart: function (item) {
      item.quantity = 1;
      if ($rootScope.currentOrder && $rootScope.currentOrder.order.filter(obj => obj.id == item.id).length > 0) {
        var currentItem = $rootScope.currentOrder.order.filter(obj => obj.id == item.id)[0];
        currentItem.quantity += item.quantity;
      }
      else if ($rootScope.currentOrder) {
        $rootScope.currentOrder.order.push(item);
      } else {
        $rootScope.currentOrder = {};
        $rootScope.currentOrder.order = []
        $rootScope.currentOrder.order[0] = item;
      }
      $location.path("/cart");
    },
    calculateBill: function () {
      $rootScope.currentOrder.bill = 0;
      for (let i = 0; i < $rootScope.currentOrder.order.length; i++) {
        $rootScope.currentOrder.bill += $rootScope.currentOrder.order[i].price * $rootScope.currentOrder.order[i].quantity;
      }
    }

  };
});

itemCartApp.run(function ($rootScope, $http) {
  $rootScope.orders = [];
  $rootScope.orders.length > 0 ? $rootScope.currentOrderId = $rootScope.orders.length : $rootScope.currentOrderId = 1;

  $http.get('item/item.json').then(function (response) {
    if (response.data) {
      $rootScope.items = response.data;
    }
  });
});
