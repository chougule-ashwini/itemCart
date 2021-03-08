'use strict';

angular.
  module('itemCartApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: "item-list/item-list.component.html",
          controller: "ItemListController"
        }).
        when('/cart', {
          templateUrl: "cart-detail/cart-detail.component.html",
          controller: "CartDetailController"
        }).
        otherwise('/');
    }
  ]);