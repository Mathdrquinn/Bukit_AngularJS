angular.module("brendan-cart", ["ngRoute"])

    .config(function ($routeProvider) {
        $routeProvider

            .when("/cart", {
                templateUrl: 'views/cart.html',
                controller: "cartCtrl"
            })

});