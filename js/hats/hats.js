angular.module("brendan-hats", ["ngRoute"])

.config(function ($routeProvider) {
   $routeProvider
       .when("/hats", {
           templateUrl: "views/hats/hats.html",
           controller: "hatsCtrl"
       })
//       .when("/hats/:idx", {
//            templateUrl: "views/hats/cap.html",
//           controller: "capCtrl"
//       });
});