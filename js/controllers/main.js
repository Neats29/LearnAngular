app.controller('calController', function($scope) {
    $scope.firstValue = null;
    $scope.secondValue = null;
    $scope.sum = null;
    $scope.lastSum = null;

    
    $scope.add = function(a, b) {
        a = $scope.firstValue;
        return $scope.sum;
    }
    
    $scope.calculate = function(a, b) {
        a = $scope.firstValue;
        b = $scope.secondValue;
        $scope.sum = a + b;
        return $scope.sum;
    }
})