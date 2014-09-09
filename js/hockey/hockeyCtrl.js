angular.module("brendan-hockey")

.controller('hockeyCtrl', function($rootScope, $scope, $routeParams, $location, $log, hockeySvc) {
    $scope.thing = "This is just the beginning of buying a hockey team";
    $log.info("hockey controller is go");

        $scope.inventory = hockeySvc.getInventory("all");

        $scope.singleItem = hockeySvc.getInventory($routeParams.idx);
        $log.info($scope.singleItem);
        $log.info($routeParams.idx);

        $scope.addItem = function (item) {
            hockeySvc.addItem(item);
            $location.path("/hockey");
        };

        $scope.goToAdd = function () {
            $location.path("/hockey/createTeam");
        };

        $scope.editItem = function (idx, post) {
            hockeySvc.updateItem(idx, post);
            $location.path("/hockey");
        };

        $scope.removeItem = function (i) {
            hockeySvc.deleteItem(i);
        };

        $rootScope.$on("item:added", function () {
            $scope.inventory = hockeySvc.getInventory("all");

        });

        $rootScope.$on("item:updated", function () {
            $scope.inventory = hockeySvc.getInventory("all");

        });

        $rootScope.$on("item:deleted", function () {
            $scope.inventory = hockeySvc.getInventory("all");

        });

});