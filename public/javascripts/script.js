angular.module('demoApp', [])
  .controller('DemoCtrl', ['$scope', function($scope) {
    $scope.count = 12345;

    $scope.add = function() {
      console.log('add to the count');
      $scope.count++;
    }
  }]);
