'use strict';

angular.
  module('itemCartApp').
  controller("CartDetailController", function ($scope, $rootScope, $location, CartService) {
    $scope.updateBill = function () {
      CartService.calculateBill();
    }
    $scope.placeOrder = function () {
      $rootScope.orders.push($rootScope.currentOrder);
      for (let i = 0; i < $rootScope.currentOrder.order.length; i++) {
        $rootScope.items.filter(obj => obj.id == $rootScope.currentOrder.order[i].id)[0].availability = $rootScope.items.filter(obj => obj.id == $rootScope.currentOrder.order[i].id)[0].availability - $rootScope.currentOrder.order[i].quantity;
      }
      $rootScope.currentOrder = null;
      $location.path("/");
    }

  });