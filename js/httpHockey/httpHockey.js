angular.module("brendan-httpHockey", ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
        .when("/httpHockey",
        {
            templateUrl: "views/httpHockey/httpHockey.html",
            controller: "httpHockeyCtrl"
        })
        .when("/httpHockey/:id/review",
        {
            templateUrl: "views/httpHockey/httpHockeyReviews.html",
            controller: "httpHockeyCtrl"
        });


});