'use strict';
angular.
  module('itemCartApp').
  controller("ItemListController", function ($scope,$rootScope,CartService) {
    $scope.items = $rootScope.items;
    $scope.addToCart = function (item) {
      CartService.addToCart(item);
      CartService.calculateBill();
    }
  });