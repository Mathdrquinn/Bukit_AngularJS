angular.module("brendan-httpCart")
    .controller("httpCartCtrl", function($scope, $rootScope, $log, $routeParams, $location, httpCartSvc) {

        $scope.work = "IT WORKS!";

        httpCartSvc.getCart().then(function(items) {
            $log.info(items);
            $scope.cartItems = items.data;

        });

        httpCartSvc.getCartItem($routeParams.id).success(function(item) {
            $log.info("routeParams in Ctrl: " + $routeParams.id);
            //$log.ingo("item in Ctrl: " + item);
            $scope.singleCartItem = item;
            $log.info(item);
        });

        $scope.addToCart = function(item) {
            httpCartSvc.addToCart(item).then(function (response) {
                $log.info("passed in item: " + item);
                $log.info("newItem: " + $scope.newItem);
                $scope.newItem = $scope.blankItem;
                $log.info("item after clearing values: " + item);
                $log.info("newItem after clearing values: " + $scope.newItem);

                //$location.path("/httpHockey");

            });
        };

        $scope.editCartItem = function(item) {
            item.cartQuantity++;
            httpCartSvc.updateCartItem(item).then(function(response) {
                $location.path("/httpHockey");
            });
        };

        $scope.deleteItem = function(id) {
            httpCartSvc.deleteCartItem(id).then(function(repsonse) {
                $locaiton.path("/httpHockey");
            });
        };


    });