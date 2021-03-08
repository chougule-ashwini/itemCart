'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
  module('itemCartApp').
  component('itemList', {
    templateUrl: 'item-list/item-list.component.html',
    controller: function ItemListController($http) {
      let self = this;
      $http.get('item/item.json').then(function (response) {
        self.items = response.data;
      });
    }
  });