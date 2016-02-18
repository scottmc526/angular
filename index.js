var app = angular.module('scott', []);

app.controller('myController', function($scope){

  $scope.contractors = [];
  $scope.showForm = false;
  $scope.buttonValue = 'add a contractor';

  $scope.getContractor = function(){
    var contractor = {};
    contractor.name = $scope.name;
    contractor.rate = $scope.rate;
    $scope.contractors.push(contractor)
    if ($scope.contractors.length > 2){
      $scope.buttonValue = 'Really?'
    } else if ($scope.contractors.length > 0) {
      $scope.buttonValue = 'Add another contractor'
    }
  }
})
