angular.module("brendan-hats")

.controller("hatsCtrl", function($scope, $log, hatsSvc) {
        $scope.thing = "This is just the beginning of hats";
        $log.info("hats controller is go");
    });