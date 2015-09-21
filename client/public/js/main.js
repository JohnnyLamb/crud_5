var app = angular.module('myApp', []);

app.controller('lamaController', function($scope, $http) {
// GET request to get all lamas
    $scope.lamas ={};

    $http.get('api/lamas')
      .success(function(data) {
        $scope.lamas = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error:' + data);
      });


// POST FUNCTION to create lama and send to DATABASE
  $scope.addLama = function() {
    $scope.payload = {
      'name': $scope.name,
      'age': $scope.age
    };
    $http.post('/api/lamas', $scope.payload)
      .success(function(data) {
        $scope.lamas.push(data);
        console.log($scope.payload);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
});
