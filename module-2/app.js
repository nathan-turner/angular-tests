(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;  
  
  tobuy.items = ShoppingListCheckOffService.getItems();

  tobuy.checkItem = function (index) {
    ShoppingListCheckOffService.checkItem(index);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyList = this;

  alreadyList.items = ShoppingListCheckOffService.getBoughtItems();

  
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyitems = [
  { name: "cookies", quantity: 5 },
  { name: "cakes", quantity: 4 },
  { name: "pies", quantity: 1 },
  { name: "chips", quantity: 2 },
  { name: "crackers", quantity: 3 }
  ];
  var boughtitems = [];

  service.checkItem = function (i) {    
    boughtitems.push(tobuyitems[i]);
	tobuyitems.splice(i, 1);
  };  

  service.getItems = function () {
    return tobuyitems;
  };
  
  service.getBoughtItems = function () {
    return boughtitems;
  };
}

})();
