angular.module("brendan-ng-features")

.controller('homeCtrl', function($scope, $log) {
   $scope.thing = "This is just the beginning";
   $log.info("home controller is go");

});