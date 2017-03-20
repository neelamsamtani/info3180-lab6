var app = angular.module("myshoppinglist", []); 

app.controller("myctrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.additem = function(){
        $scope.errortext = "";
        if (!$scope.addme) {return;}
        if ($scope.products.indexOf($scope.addme) == -1) {
            $scope.products.push($scope.addme);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    };
    $scope.removeitem = function(x){
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    };
});