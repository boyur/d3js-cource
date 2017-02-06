require('../../bower_components/angular');

var myAppModule = angular.module('kitApp', []);

myAppModule.filter('greet', function() {
  return function(name) {
    return 'Hello, ' + name + '!';
  };
});
// Module
//   Constant
//   Value
//   Factory
//   Service
//   Provider
