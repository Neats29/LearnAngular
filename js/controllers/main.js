app.controller('calController', function($scope) {
    $scope.sum = null;
    $scope.displayed = '0';
    $scope.secondValue = null;
    $scope.operator = null;
    
    $scope.operation = function(x){
        return $scope.operator = x;
    }
    
    $scope.numberButton = function(clickedValue) {
        if ($scope.displayed == '0') { 
            $scope.sum = clickedValue; 
            $scope.displayed = clickedValue; 
        }
        else {
            $scope.secondValue = clickedValue;
            $scope.displayed = clickedValue;
        }
    }
        
    
    $scope.calculate = function() {
        $scope.sum = $scope.sum.toFixed(1);
        return 
        $scope.operator === 'add'      ? $scope.sum = $scope.sum + $scope.displayed :
        $scope.operator === 'subtract' ? $scope.sum = $scope.sum - $scope.displayed :
        $scope.operator === 'multiply' ? $scope.sum = $scope.sum * $scope.displayed :
                                         $scope.sum = $scope.sum / $scope.displayed ;
        
    }
    
    $scope.equals = function() {
        $scope.calculate();
        $scope.displayed = $scope.sum;
    }
    
    
    $scope.clear = function() {
        $scope.sum = null;
        $scope.displayed = '0';
        $scope.currentValue = null;
    }
})