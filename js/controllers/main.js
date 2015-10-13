app.controller('calController', function($scope) {
    $scope.sum = null;
    $scope.displayed = '0';
    $scope.operator = null;
    $scope.newValue = true;
    
    $scope.operation = function(x){
        $scope.operator = x;
        return $scope.operator;
    };
        
    $scope.numberButton = function(clickedValue) {
        if ($scope.operator === null) {
            $scope.displayed += clickedValue.toString();
            $scope.sum = Number($scope.displayed);
            console.log("sum:", $scope.sum)
            
        } else {
            console.log($scope.operator);
            $scope.displayed = '';
            $scope.displayed += clickedValue.toString();
            $scope.displayed = Number($scope.displayed);
            console.log("displayed second value:", $scope.displayed);
        }
    }
    
    
    $scope.calculate = function() {
//        var fixed = $scope.sum;
//        if ($scope.sum % 1 !== 0) { $scope.sum = fixed.toFixed(1); }
        console.log("sum in cal:", $scope.sum);
        console.log("display in cal:", $scope.display);
        return $scope.operator === 'add' ? $scope.sum += $scope.displayed : //the first value is set to the sum and the second to display and the calculation is set to sum again so if another operator is used the same calculate function will work
        $scope.operator === 'subtract'   ? $scope.sum -= $scope.displayed :
        $scope.operator === 'multiply'   ? $scope.sum *= $scope.displayed :
                                           $scope.sum /= $scope.displayed ;
    };
    
    $scope.equals = function() {
        $scope.calculate();
        console.log("sum in equals", $scope.sum)
        $scope.displayed = $scope.sum;
    };
    
    
    $scope.clear = function() {
        $scope.sum = null;
        $scope.displayed = '0';
    };
});