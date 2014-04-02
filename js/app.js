 // Declare app level module
angular.module('myApp', [
  'myApp.services',
  'myApp.controllers'
]);

document.addEventListener('deviceready', function() {
    angular.bootstrap(document, ['myApp']);
}, false);
