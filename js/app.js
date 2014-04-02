'use strict';

// Declare app level module
 angular.module('myApp', [
  'myApp.services',
  'myApp.controllers'
]);

 document.addEventListener('deviceready', function () {
     //hide loading
     var loadingElement = document.getElementById("loading");
     loadingElement.setAttribute('style', 'display:none;');
     
     //show main
     var mainElement = document.getElementById("main");
     mainElement.setAttribute('style', 'display:block;');
    
    //bootstrap angular
    angular.bootstrap(document, ['myApp']);
     
 }, false);