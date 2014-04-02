'use strict';

angular.module("myApp.controllers", [])
.controller("HomeController", function ($scope) {
        $scope.message = "AngularJS!";
        $scope.ready = true;
});