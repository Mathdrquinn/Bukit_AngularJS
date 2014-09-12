angular.module("brendan-httpHockey")
.factory("httpHockeySvc", function($http, $rootScope, $log) {

    var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/items3Url";

    var getItems = function () {
        return $http.get(urlBase);
    };

    var getItem = function (i) {
        $log.info(urlBase + "/" + i)
        return $http.get(urlBase + "/" + i);
    };

    var addItem = function (item) {
        return $http.post(urlBase, item).then(function(repsonse) {
            $rootScope.$broadcast("item:addedToUrl");
            $log.info("item:addedToUrl");
        });
    };

    var updateItem = function(item) {
        return $http.put(urlBase + "/" + item._id, item).then(function(response) {
            $rootScope.$broadcast("item:updatedOnUrl");
            $log.info("item:updatedOnUrl");
        });
    };

    var deleteItem = function(id) {
        return $http.delete(baseUrl + "/" + id).then(function(response) {
            $rootScope.$broadcast("item:deletedFromUrl");
            $log.info("item:deletedFromUrl");
        });
    };

    return {
        getItems: getItems,
        getItem: getItem,
        addItem: addItem,
        updateItem: updateItem,
        deleteItem: deleteItem
    }

});