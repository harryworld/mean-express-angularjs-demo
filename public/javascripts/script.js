angular.module('demoApp', [])
  .controller('DemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.count = 0;

    $http.get('/api/count')
      .success(function(data){
        $scope.count = data.count;
        // {count: 10}
      });

    $scope.add = function() {
      console.log('add to the count');
      $scope.count++;
    }
  }]);
