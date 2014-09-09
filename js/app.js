angular.module("brendan-ng-features",
    [   "brendan-hockey",
        "brendan-hats",
        "ngRoute"
    ])
.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
            templateUrl: 'views/home.html',
            contorller: 'homeCtrl'
    })
    .otherwise( {
        redirectTo: "/"
    });
});