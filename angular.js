var app = angular.module("myshoppinglist", []); 

app.controller("myctrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.additem = function(){
        $scope.products.push($scope.addme);
    };
});