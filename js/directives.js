//Thanks to Chris Otten for his help on this section!!!
angular.module("app.directives", [])
    .directive("inventoryDirective", function () {
        return {
            restrict:"E",
            scope: {
                item: "@",
                logo: "@",
                cost: "@",
                about: "@",
                location: "@",
                place: "@",
                quantity: "@"
            },
            templateUrl:"views/directives/inventory.html",
//            link: function (scope, element, attrs) {
//                // This where where I can run jquery
//            }
        };
    });