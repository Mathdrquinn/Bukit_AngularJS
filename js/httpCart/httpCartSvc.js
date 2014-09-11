angular.module("brendan-httpCart")
    .factory("httpCartSvc", function($http, $rootScope, $log) {

        var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/cart";

        var getCart = function () {
            return $http.get(urlBase);
        };

        var getCartItem = function (i) {
            $log.info(urlBase + "/" + i)
            return $http.get(urlBase + "/" + i);
        };

        var addToCart = function (item) {
            return $http.post(urlBase, item).then(function(repsonse) {
                $rootScope.$broadcast("item:addedToCartUrl");
                $log.info("item:addedToCartUrl");
            });
        };

        var updateCartItem = function(item) {
            return $http.put(urlBase + "/" + item._id, item).then(function(response) {
                $rootScope.$broadcast("item:updatedOnCartUrl");
                $log.info("item:updatedOnCartUrl");
            });
        };

        var deleteCartItem = function(id) {
            return $http.delete(baseUrl + "/" + id).then(function(response) {
                $rootScope.$broadcast("item:deletedFromCartUrl");
                $log.info("item:deletedFromCartUrl");
            });
        };

        return {
            getCart: getCart,
            getCartItem: getCartItem,
            addToCart: addToCart,
            updateCartItem: updateCartItem,
            deleteCartItem: deleteCartItem
        }

    });