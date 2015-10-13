app.controller('calController', function($scope) {
    $scope.sum = null;
    $scope.displayed = '0';
    $scope.operator = null;
    
    $scope.operation = function(x){
        $scope.operator = x;
        return $scope.operator;
    };
    
    $scope.numberButton = function(clickedValue) {
        if ($scope.displayed === '0') { 
            $scope.displayed = clickedValue; 
            $scope.sum = clickedValue; 
        }
        else {     
            $scope.displayed = clickedValue;
        }
    };
        
    
    $scope.calculate = function() {
        if ($scope.sum % 1 !== 0) $scope.sum.toFixed(1);
        return $scope.operator == 'add' ? $scope.sum += $scope.displayed :
        $scope.operator === 'subtract'  ? $scope.sum -= $scope.displayed :
        $scope.operator === 'multiply'  ? $scope.sum *= $scope.displayed :
                                          $scope.sum /= $scope.displayed ;
    }
    
    $scope.equals = function() {
        $scope.calculate();
        $scope.displayed = $scope.sum;
    };
    
    
    $scope.clear = function() {
        $scope.sum = null;
        $scope.displayed = '0';
    };
});