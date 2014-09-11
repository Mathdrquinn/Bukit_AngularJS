angular.module("brendan-httpHockey")
.controller("httpHockeyCtrl", function($scope, $rootScope, $log, $routeParams, $location, httpHockeySvc, httpCartSvc) {

        $scope.work = "IT WORKS!";

        $scope.addToCart = function(item) {
            if(item.cartStatus === false) {

                item.cartStatus = true;
                item.quantity--;
                item.cartQuantity++;
                $scope.editItem(item);

                httpCartSvc.addToCart(item).then(function (response) {
                    $log.info("passed in item: " + item);
                    $log.info("newItem: " + $scope.newItem);
                    $scope.newItem = $scope.blankItem;
                    $log.info("item after clearing values: " + item);
                    $log.info("newItem after clearing values: " + $scope.newItem);

                    //$location.path("/httpHockey");

                });
                return
            }
            else if(item.quantity == "0") {
                alert("Out of stock!");
                return
            }
            else if (item.cartStatus === true && item.quantity > 0) {

                item.quantity--;
                item.cartQuantity++;
                $scope.editItem(item);
                $scope.editCartItem(item)
                return

            }
            else {
                $log.info("i don\'t know how we got here");
            }
        };

        $scope.editCartItem = function(item) {
            httpCartSvc.updateCartItem(item).then(function(response) {
            });
        };

        $scope.blankItem = {
            item: "Unknown",
            type: "nothing Yet",
            quantity: 15,
            cartQuantity: 0,
            cartStatus: false,
            thoughts:
                [],
            avgRating: function() {
                var arr = this.thoughts;
                var sum = 0;
                var length = this.thoughts.length;
                for(var j = 0; j < length; j++) {
                    sum += arr[j].rating;
                }
                $log.info(this.rating);
                return sum/length;
            },
            location: "Nowhere, USA",
            logo: "http://placehold.it/30x30",
            about: "[Describe the item here]",
            cost: null
        };

        $scope.newItem = {
            item: "Unknown",
            type: "nothing Yet",
            quantity: 15,
            cartQuantity: 0,
            cartStatus: false,
            thoughts:
                [
                    {
                        rating: [4],
                        review: "'twas Good"
                    },
                    {
                        rating: [5],
                        review: "'twas Better"
                    }
                ],
            avgRating: function() {
                var arr = this.thoughts;
                var sum = 0;
                var length = this.thoughts.length;
                for(var j = 0; j < length; j++) {
                    sum += arr[j].rating;
                }
                $log.info(this.rating);
                return sum/length;
            },
            location: "Nowhere, USA",
            logo: "http://placehold.it/30x30",
            about: "[Describe the item here]",
            cost: null
        };

        httpHockeySvc.getItems().then(function(items) {
            $log.info(items);
            $scope.items = items.data;

        });

        httpHockeySvc.getItem($routeParams.id).success(function(item) {
            $log.info("routeParams in Ctrl: " + $routeParams.id);
            //$log.ingo("item in Ctrl: " + item);
            $scope.singleItem = item;
            $log.info(item);
        });

        $scope.addItem = function(item) {
            httpHockeySvc.addItem(item).then(function (response) {
                $log.info("passed in item: " + item);
                $log.info("newItem: " + $scope.newItem);
                $scope.newItem = $scope.blankItem;
                $log.info("item after clearing values: " + item);
                $log.info("newItem after clearing values: " + $scope.newItem);

                //$location.path("/httpHockey");

            });
        };

        $scope.editItem = function(item) {
            httpHockeySvc.updateItem(item).then(function(response) {
                //$location.path("/httpHockey");
            });
        };

        $scope.deleteItem = function(id) {
            httpHockeySvc.deleteItem(id).then(function(repsonse) {
                $locaiton.path("/httpHockey");
            });
        };

        $scope.avgRating = function(a) {
            var arr = a;
            var sum = 0;
            var length = a.length;
            for(var j = 0; j < length; j++) {
                sum += Number(arr[j].rating);
            }
            $log.info(a);
            return sum/length;
        };
        $scope.reviewItem = function (item, rating, review) {
            var obj = {
                rating: Number(rating),
                review: review
            };
            item.thoughts.push(obj);
            $scope.editItem(item);
        };




});