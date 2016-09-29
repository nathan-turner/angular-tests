(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
     $scope.message = "";

     $scope.checkIfTooMuch = function () {
       var arr;
       if(!$scope.food_items){
         $scope.message = "Please enter data first";
       }
       else{
         arr = $scope.food_items.split(',');
         if(arr.length<=3){
           $scope.message = "Enjoy!";
         }
         else if(arr.length>3){
           $scope.message = "Too Much!";
         }
       }
     };
   }

 })();
