angular.module("brendan-cart")
.controller("cartCtrl", function($rootScope, $scope, $routeParams, $location, $log, cartSvc) {

        $scope.bigCart = cartSvc.getBig();


        $scope.thingy = "This is just the beginning of the cart";
        $log.info("cart controller is go");

    });