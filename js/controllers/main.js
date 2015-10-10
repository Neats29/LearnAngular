app.controller('calController', function($scope) {
    $scope.currentValue = null;
    $scope.sum = null;
    $scope.displayed = null;
    
    $scope.add = '+';
    $scope.subtract = '-';


    
    $scope.numberButton = function(clickedValue) {
        $scope.currentValue += clickedValue;
        $scope.displayed = clickedValue;
    }
        
    
    
    $scope.calculate = function(operator) {
        return operator === $scope.add ? $scope.sum = $scope.sum + $scope.currentValue : $scope.sum = $scope.sum - $scope.currentValue;
    }
    
    $scope.equals = function() {
        $scope.calculate();
        $scope.displayed = $scope.sum;
    }
    
    
    $scope.clear = function() {
        $scope.sum = null;
    }
})