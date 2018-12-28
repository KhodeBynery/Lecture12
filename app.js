(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

//Add a $filter service to the $inject and MsgController
MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    //Add a new variable; the returned message
    var msg = "Yaakov likes to eat healthy snacks at night!";
    //New variable, filtering service for uppercase
    var output = $filter('uppercase')(msg);
    //Change the full message to complete uppercase; return the output carable
    return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
