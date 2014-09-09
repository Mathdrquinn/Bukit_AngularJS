angular.module("brendan-hockey", ["ngRoute"])

.config(function ($routeProvider) {
    $routeProvider

        .when("/hockey", {
            templateUrl: 'views/hockey/hockey.html',
            controller: "hockeyCtrl"
        })
        .when("/hockey/createTeam", {
            templateUrl: "views/hockey/add.html",
            controller: "hockeyCtrl"
        })
        .when("/hockey/:idx/modify", {
            templateUrl: "views/hockey/edit.html",
            controller: "hockeyCtrl"
        });

});