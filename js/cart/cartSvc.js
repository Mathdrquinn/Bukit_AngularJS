angular.module("brendan-cart")
.factory("cartSvc", function($rootScope, $log) {

    var _bigCart =
        [
            {
                item: "Columbus Blue Jackets",
                type: "hockey",
                quantity: 15,
                cartQuantity: 3,
                cartStatus: false,
                thoughts:
                [{
                    rating: 3,
                    review: "This food is mediocre"
                },
                {
                    rating: 2,
                    review: "slightly better than bad"
                }],
                rating: [100],
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
                review: ["This food is mediocre"],
                location: "Edisto Island, SC",
                logo: "http://media.merchantcircle.com/39611802/2011%20Riptide%20Logo_full.jpeg",
                about: "The Carolina's already care so little about hockey we decided to put one on an island with no parking",
                cost: 1200000005.00
            }
        ];

    var getBigCart = function() {
            $log.info(_bigCart);
            return _bigCart
    };

    var addToBigCart = function(item) {
        if(item.cartStatus === true) {
            for(l = 0; l < _bigCart.length; l++) {
                if(_bigCart[l].item === item.item) {
                    _bigCart[l].cartQuantity++;
                    return
                }
            }
        }
        else if (item.cartStatus === false) {
            item.cartStatus = true;
            item.cartQuantity++;
            _bigCart.push(item);
            $rootScope.$broadcast("item:addToCart");
            $log.info("item:added");
        }
    };

    return {
        getBig: getBigCart,
        addBig: addToBigCart
    }
});