'use strict';

describe('itemList', function() {

  // Load the module that contains the `itemList` component before each test
  beforeEach(module('itemCartApp'));

  // Test the controller
  describe('ItemListController', function() {

    it('should create a `items` model with 3 items', inject(function($componentController) {
      var ctrl = $componentController('itemList');

      expect(ctrl.items.length).toBe(3);
    }));

  });

});