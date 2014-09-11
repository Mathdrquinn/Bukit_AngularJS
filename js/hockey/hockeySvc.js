angular.module("brendan-hockey")
.factory("hockeySvc", function ($rootScope, $log) {

    var _inventory = [
        {
            item: "Folly Loggerheads",
            type: "hockey",
            quantity: 1,
            cartQuantity: 0,
            cartStatus: false,
            thoughts:
                [{
                    rating: 1,
                    review: "This food is bad"
                }],
            rating: [1],
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
            review: ["This food is bad"],
            location: "Folly Beach, SC",
            logo: "http://i21.photobucket.com/albums/b284/SCHelmetProject/Loggerheads.jpg",
            about: "Hockey on the beach, What could go wrong.",
            cost: 1200000001.00
        },
        {
            item: "North Charleston Warblers",
            type: "hockey",
            quantity: 8,
            cartQuantity: 0,
            cartStatus: false,
            thoughts:
                [{
                    rating: 5,
                    review: "This food is good"
                }],
            rating: [5],
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
            review: ["This food is good"],
            location: "North Charleston, SC",
            logo: "http://www.johnmuirlaws.com/wp-content/uploads/2011/06/warbler-yellow-rumped-audubons-m.jpg",
            about: "Don't mind that we already have a team, lets go pro.",
            cost: 1199999999.99
        },
        {
            item: "Edisto Island Riptides",
            type: "hockey",
            quantity: 1,
            cartQuantity: 0,
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

    var getInventory = function(x) {
        if (x === "all") {
            return _inventory
        }
        else if (x >= 0) {
            return _inventory[x]
        }
        else {
            return {item: "redwings are horrible"}
        }
    };

    var addItem = function (newObj) {
        _inventory.push(newObj);
        $rootScope.$broadcast("item:added");
        $log.info("item:added");
    };

    var deleteItem = function (i) {
        _inventory.splice(i, 1);
        $rootScope.$broadcast("item:deleted");
        $log.info("item:deleted");
    };

    var updateItem = function (i, item) {
        _inventory[i] = item;
        $rootScope.$broadcast("item:updated");
        $log.info("item:updated");
    };

    var reviewItem = function (i, rating, review) {
        _inventory[i].rating.push(rating);
        _inventory[i].review.push(review);
        $rootScope.$broadcast("item:reviewed");
        $log.info("item:reviewed");
    };

    return {
        getInventory: getInventory,
        addItem: addItem,
        deleteItem: deleteItem,
        updateItem: updateItem,
        reviewItem: reviewItem,
    };
});