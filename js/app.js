angular.module("brendan-ng-features",
    [   "brendan-httpHockey",
        "brendan-httpCart",
        "brendan-cart",
        "brendan-hockey",
        "brendan-hats",
        "ngRoute"
    ])
.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
            templateUrl: 'views/home.html',
            contorller: 'homeCtrl'
    })
    .when("/adminRights",
    {
        templateUrl: "views/adminRights.html",
        controller: "httpHockeyCtrl"
    })
    .otherwise( {
        redirectTo: "/"
    });
});