angular.module("brendan-httpCart", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/httpCart",
            {
                templateUrl: "views/httpCart/httpCart.html",
                controller: "httpCartCtrl"
            });


    });